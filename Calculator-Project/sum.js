const sumRequestHandler = (req , res) =>{
console.log("In sum Request handler" , req.url);
const body =[];
req.on('data' , chunk => body.push(chunk));       //Chunks
req.on('end' , () =>{
    const bufferStr = Buffer.concat(body).toString();          // Buffer
    const params = new URLSearchParams(bufferStr); 
    const bodyObject = Object.fromEntries(params);
    const result = Number(bodyObject.First) + Number(bodyObject.Second)
    console.log(result);

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
    <h1>Your SUM is : ${result}</h1>

</body>
</html>
        `)
return res.end() 
})
}
exports.sumRequestHandler = sumRequestHandler;