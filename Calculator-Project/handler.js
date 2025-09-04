const {sumRequestHandler} = require('./sum')

const requestHandler = (req ,res) =>{
console.log(req.url , req.method);
if (req.url === '/'){
    res.setHeader = ('Content-Type' , 'text/html')
    res.write(`
        <html>
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>Welcome to Calculator World</h1>
    <a href="/calculator">Go to Calculator</a>
</body>
</html>
        `)
      return res.end();
} 
else if (req.url.toLowerCase() === '/calculator'){
     res.setHeader = ('Content-Type' , 'text/html')
    res.write(`
        <html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>Here is the calculator</h1>
    <form action="./calculated-result" , method="POST">
    <input type="text" placeholder="First num" name="First">
    <input type="text" placeholder="Second num" name="Second">
    <input type="Submit" value="Sum">
    </form>
    
</body>
</html>
   ` )
return res.end();
}
else if (req.url.toLowerCase() === '/calculated-result' && req.method === "POST") {
   return sumRequestHandler(req , res);
}
 res.setHeader = ('Content-Type' , 'text/html')
    res.write(`
        <html>
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>Error 404 not found</h1>
    <a href="/">Go to Home</a>
</body>
</html>
        `)
return res.end() 

}
exports.requestHandler = requestHandler;