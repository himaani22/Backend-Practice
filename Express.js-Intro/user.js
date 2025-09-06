//Simple Nodde.js server

const fs = require('fs')

const userRequestHandler =  (req , res) => {
    console.log(req.url , req.method );
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
    
    const body = []
    req.on('data' , chunk =>{                             //Chunks  O/P = <Buffer 75 73 64>
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end' , () =>{                                //Buffer  //O/P = Himani+sahu&gender=female
        const fullBody = Buffer.concat(body).toString();
        console.log(fullBody);

    const params = new URLSearchParams(fullBody); 
    const bodyObject = Object.fromEntries(params)
    console.log(params);

    fs.writeFile('user.txt' , JSON.stringify(bodyObject) , error => {  // using async 
console.log('Data written Successfully');
 res.statusCode = 302;
    res.setHeader('Location' , '/')
    res.end();
    })
   
    })
    
   }
else {
   res.setHeader('Content-type' , 'text/html')         //Sending Response
   res.write('<html>');
   res.write('<html><title>Holaa</title></html>')
   res.write('<body><h1>Holaaaaa amigos</h1></body>')
   res.write('</html>');
   return res.end();
 } };
 module.exports = userRequestHandler;

