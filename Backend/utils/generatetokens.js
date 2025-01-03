import jwt from 'jsonwebtoken';

 const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "15d",
    });

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, //MS
        httponly: true, //Prevents from cross-site scripting attacks
        sameSite: "strict",//Prevents from CSRF request forgery attacks
        secure: process.env.NODE_ENV !== "development",//inorder to generate cookie only in HTTPS secure connections to prevent from attacks
    });
 };
 export default generateTokenAndSetCookie;