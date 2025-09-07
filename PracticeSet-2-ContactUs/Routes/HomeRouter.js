//Core module
const path = require('path')

// External module
const express = require('express')

//Local module
const rootDir = require('../Utils/PathUtil')

const homeRouter = express.Router();

homeRouter.get("/" , (req , res , next) => {
console.log("Handling / for GET" , req.url , req.method);
res.sendFile(path.join(rootDir , 'Views' , 'home.html'))
})

module.exports = homeRouter