import User from "../models/user.models.js";

export const getUserForSidebar=async(req,res)=>{
    try{
        const loggedinUserId=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedinUserId}}).select("-password");
        return res.status(200).json(filteredUsers);


    }catch(err){
        console.log("Error in getUserForSidebar",err.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}