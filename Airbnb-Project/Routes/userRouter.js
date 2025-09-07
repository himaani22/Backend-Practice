//Core modules
const path = require('path')       // Serving Html files

// External Module
const express = require('express')
const userRouter = express.Router();

//Local module
const rootDir = require("../Utils/PathUtil");
userRouter.get("/" , (req , res ,next) =>{
    res.sendFile(path.join(rootDir  , 'Views' , 'home.html'))
});

module.exports = userRouter;