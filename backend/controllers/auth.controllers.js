import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateTokens.js";

export const signup=async(req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,gender}=req.body;
        if(password!==confirmPassword){
            return res.status(400).json({error:"Passwords doesn't match"});
        }
        const user=await User.findOne({username});
        if(user){
            return res.status(400).json({error:"Username already exists"});
        }
        //Hash Password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)

        const boyProfile=`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfile=`https://avatar.iran.liara.run/public/girl?username=${username}`;

        
        const newUser=new User({
            fullName,
            username,
            password:hashedPassword,
            confirmPassword,
            gender,
            profilePic:gender==="male"?boyProfile:girlProfile
        })
        if(newUser){
           //generate token
           generateTokenandSetCookie(newUser._id,res);

            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                profilePic:newUser.profilePic
            })          
        }else{
            res.status(400).json({error:"Invalid User Data"});
        }
    }catch(err){
        console.log("Error in signup controller",err.message);
        res.status(500).json({error:"Internal Server error"});
    }
}
export const login=async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await User.findOne({username});
        const ispasswordcorrect=await bcrypt.compare(password,user?.password||"");

        if(!user || !ispasswordcorrect){
            return res.status(400).json({error:"Invalid username or password"});
        }
        generateTokenandSetCookie(user._id,res);

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic
        }) 
    }catch(err){
        console.log("Error in login",err.message);
        res.status(500).json({error:"Internal Server error"});
    }
}
export const logout=(req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    }catch(err){
        console.log("Error in logout",err.message);
        res.status(500).json({error:"Internal Server error"});
    }
}
