import mongoose from "mongoose";

const connectToMongodb = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL,);
        console.log("MongoDB connected");
        
    } catch (error) {
        console.log("Error is connecting MongoDB", error.message);
        
        
    }
};

export default connectToMongodb;
