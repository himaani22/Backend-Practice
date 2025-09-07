// External Module
const express = require('express')
const path = require('path')
//Local module
const userRouter = require('./Routes/userRouter')
const hostRouter = require('./Routes/hostRouter')
const rootDir = require('./Utils/PathUtil')

const app = express();

/* app.use((req , res , next) =>{
console.log(req.url , req.method);
next();
}) */

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter)

// Adding 404 msg not found
app.use((req , res , next) =>{
 //   res.status(404).send("<h1>ERROR 404 NOT FOUND !!!</h1>")
    res.status(404).sendFile(path.join(rootDir  , 'Views' , '404.html'))
})

const PORT = 3001;
app.listen(PORT ,() =>{
console.log(`Server running on Host http://localhost:${PORT}`);
})