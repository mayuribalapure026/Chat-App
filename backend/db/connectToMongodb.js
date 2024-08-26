import mongoose from "mongoose";

const connectToMongodb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MONGODB");
    }catch(err){
        console.log("Error connecting to MongoDb",err.message);
    }
}
export default connectToMongodb;