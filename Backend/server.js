import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongodb from './db/connectToMongodb.js';



dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=>{
    //root route http://localhost:5000/
    res.send("hello world");
});

//we are using middleware because its time waste to create new routes for each one
app.use("/api/auth", authRoutes);



app.listen(PORT,()=>{
    connectToMongodb();
    console.log(`Server is Running on port ${PORT}`);  
});   