// Learning about express Routers

//Core modules
const path = require('path')
// External Module 
const express = require('express')
const hostRouter = express.Router();

//Local module
const rootDir = require('../Utils/PathUtil')             // Using file helper
hostRouter.get("/add-home" , (req , res ,next) =>{
    res.sendFile(path.join(rootDir , 'Views' , 'addHome.html'))
});

hostRouter.post("/add-home" , (req , res ,next) =>{
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'Views' , 'HomeSucces.html'))
   });

module.exports = hostRouter;