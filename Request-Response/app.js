//Simple Nodde.js server
const http = require('http')

const server =  http.createServer((req , res) => {
    console.log(req.url , req.method , req.headers);
   // process.exit();    // Stops event loop
    
   if (req.url === '/'){
    res.setHeader('Content-type' , 'text/html')         //Routing requests through Url
   res.write('<html>');
   res.write('<html><title>Holaa</title></html>')
   res.write('<body><h1>Welcome Home</h1></body>')
   res.write('</html>');
   return res.end();
   } 
   else if (req.url === "/products"){
     res.setHeader('Content-type' , 'text/html')         
   res.write('<html>');
   res.write('<html><title>Holaa</title></html>')
   res.write('<body><h1>Products Section</h1></body>')
   res.write('</html>');
   return res.end();
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