const express = require('express');

const app = express();

// ADD 2 dummy middleware that logs request path and request method
app.use((req , res ,next) =>{
    console.log("First dummy middleware" , req.url , req.method);
    next();
})

app.use((req , res ,next) =>{
    console.log("Second dummy middleware" , req.url , req.method);
    next();
})

// ADD a 3rd middleware that reutrns a response
/* app.use((req,res,next) =>{
    console.log("Thirdd dummy middleware" , req.url , req.method);
    res.send("<h1>Welcome to Coding world</h1>")
})  */

// Now add handling using two more middleware that handle path / , a request to /contact-us page
app.get("/" , (req , res , next) => {
console.log("Handling / for GET" , req.url , req.method);
res.send(`<h1>Hola amigos Front page</h1>`)
})

// Here contact-us should return a form with name & email as input that submits to contact-us page 
app.get("/contact-us" , (req , res , next) => {
console.log("Handling /contact us for GET" , req.url , req.method);
res.send(`
    <h1>Provide your contact details here</h1>
    
    <form action = "/contact-us" METHOD = "POST">
    <input type ="text" name = "name" placeholder = "Enter your name"/>
    <input type ="email" name = "email" placeholder = "Enter your email"/>
     <input type  = "submit" >
    </form> `)
   
})

//Also handle POST incoming request to /contact-us path using a separate middleware
app.post("/contact-us" , (req , res , next) =>{
  console.log("Handling /contact us for POST" , req.url , req.method);  
  res.send(`<h1>We will contact you shortly</h1>`);
 
})

const PORT = 3000;
app.listen(PORT , () =>{
    console.log(`Server running on address http://localhost:${PORT}`);
})