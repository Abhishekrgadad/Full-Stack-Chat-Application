export const signup = async (req,res)=>{
    //This is displayed in the terminal when we run on the browser with the page loading continuously.
   //This is used to stop that loading and display the content inside this as a response.
   try {
    const {fullname,username, password,confirmPassword,gender} = req.body;
    
   } catch (error) {
    
   }

};
    
    
    
    
    
    

export const login = (req,res) =>{
    console.log("loginUser");
};

export const logout = (req,res)=>{
    console.log("logoutUser");
};



