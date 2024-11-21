const express = require('express');

const app = express();

app.get("/", (req,res)=>{
    //root route http://localhost:5000/
    res.send("hello world");
});

app.listen(5000,()=> console.log("Server is running on port 5000"));