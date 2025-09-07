// External Modules
const express = require('express');
// Core modules
const rootDir = require('./Utils/PathUtil');
//Local modules
const path = require('path');
const homeRouter = require('./Routes/HomeRouter')
const contactRouter = require('./Routes/ContactRouter')
const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter)
 
app.use((req , res , next) =>{
    res.sendFile(path.join(rootDir , 'Views' , '404.html'));
})


const PORT = 3000;
app.listen(PORT , () =>{
    console.log(`Server running on address http://localhost:${PORT}`);
})