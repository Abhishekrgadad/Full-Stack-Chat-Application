
export const getUsersForSidebar = async (req,res)=>{
    try {
        
    } catch (error) {
        console.log("Error in getUserForSidebar", error.message);
        res.status(500).json({error:"Internal Server Error"});
        
    }
}