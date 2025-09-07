//Core module
const path = require('path')

// External module
const express = require('express')

//Local module
const rootDir = require('../Utils/PathUtil')

const contactRouter = express.Router();
contactRouter.get("/contact-us" , (req , res , next) => {
res.sendFile(path.join(rootDir , 'Views' , 'contactUs.html'))
})

//Also handle POST incoming request to /contact-us path using a separate middleware
contactRouter.post("/contact-us" , (req , res , next) =>{
    console.log(req.body);
  res.sendFile(path.join(rootDir , 'Views' , 'contactSuccess.html'));
})


module.exports = contactRouter