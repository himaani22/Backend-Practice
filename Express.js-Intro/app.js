

// External modules
const express = require('express');

// Local module
const userRequestHandler = require('./user')

const app = express();

app.use ((req,res,next) => {
console.log(req.url , req.method);
next();
})

app.use ((req,res,next) => {
console.log(req.url , req.method);
res.send("<p>HEYA BABBYYY KESE HO</p>")
})


const PORT = 3001;
app.listen(PORT , () =>{
    console.log(`Server running on port ${PORT}`);
});