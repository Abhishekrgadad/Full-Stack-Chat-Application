import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.route.js';
import connectToMongodb from './db/connectToMongodb.js';


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());//Parse the incoming requests with json payloads(from req.body)
//we are using middleware because its time waste to create new routes for each one
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.get("/", (req,res)=>{
//     //root route http://localhost:5000/
//     res.send("hello world");
// });

app.listen(PORT,()=>{
    connectToMongodb();
    console.log(`Server is Running on port ${PORT}`);  
});   