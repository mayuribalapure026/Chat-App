import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import connectToMongodb from "./db/connectToMongodb.js";
import cookieParser from "cookie-parser";
import { app,server } from "./sockets/socket.js";


dotenv.config();
 
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
const PORT=process.env.PORT||3000;
// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })

server.listen(PORT,()=>{
    connectToMongodb();
    console.log(`App listening on port ${PORT}`);
})