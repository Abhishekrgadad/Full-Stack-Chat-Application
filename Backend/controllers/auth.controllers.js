import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/generatetokens.js";


export const signup = async (req,res)=>{
    //This is displayed in the terminal when we run on the browser with the page loading continuously.
   //This is used to stop that loading and display the content inside this as a response.
   try {
    const {fullName,username, password,confirmPassword,gender} = req.body;

    if(password != confirmPassword){
        return res.status(400).json({error:"Password don't match"});
    }

    const user = await User.findOne({username});

    if(user){
        return res.status(400).json({error:"Username already exists"});
    }
    
    //HASHED PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);


    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender === 'male'? boyProfilePic : girlProfilePic
    });

    if(newUser){
        //Generate JWT token here
        await generateTokenAndSetCookie(newUser._id,res);
        await newUser.save();

    res.status(201).json({
        _id: newUser._id,
        fullname:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic

    });
    } else{
        res.status(400).json({error:"Invalid user data"});
    }
   } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({error:"Internal Server Error"});
    
    
   }

};
    
   

export const login = (req,res) =>{
    console.log("loginUser");
};

export const logout = (req,res)=>{
    console.log("logoutUser");
};



