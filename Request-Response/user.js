//Simple Nodde.js server
const http = require('http')
const fs = require('fs')

const server =  http.createServer((req , res) => {
    console.log(req.url , req.method , req.headers);
   // process.exit();    // Stops event loop
    
   if (req.url === '/'){
    res.setHeader('Content-type' , 'text/html')         
   res.write('<html>');
   res.write('<html><title>Holaa</title></html>')                  // Taking user Input
   res.write('<body><h1>Enter Your Details</h1></body>')
   res.write('<form action="/sub-details" method="POST">')
   res.write('<input type="text" name="userName" placeholder="Enter name" ><br>')
   res.write('<label for="male">Male</label>')
   res.write('<input type="radio" id="male" name="gender" value="male">')
   res.write('<label for="female">Female</label>')
   res.write('<input type="radio" id="female" name="gender" value="female">')
   res.write('<br> <input type="submit" value="submit">')
   res.write('</form>')
   res.write('</html>');
   return res.end();
   } 

   else if (req.url.toLowerCase() === "/sub-details" && req.method === "POST"){  //Redirecting request
    fs.writeFileSync('user.txt' , 'Himani Sahu')
    res.statusCode = 302;
    res.setHeader('Location' , '/')
   }

   res.setHeader('Content-type' , 'text/html')         //Sending Response
   res.write('<html>');
   res.write('<html><title>Holaa</title></html>')
   res.write('<body><h1>Holaaaaa amigos</h1></body>')
   res.write('</html>');
   return res.end();
 })

const PORT = 3001;
server.listen(PORT , () =>{
    console.log(`Server running on port ${PORT}`);
});