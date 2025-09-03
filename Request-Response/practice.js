// Create a page that shows navigation bar of Myntra

const http = require('http')

const server = http.createServer((req , res)  => {
console.log(res.url , res.method);
if(req.url === '/home'){
    res.write('<h1>Welcome to Home</h1>')
    return res.end();
}
else if (req.url === '/men'){
     res.write('<h1>Welcome to Men</h1>')
    return res.end();
} 
else if (req.url === '/women'){
     res.write('<h1>Welcome to Women</h1>')
    return res.end();
}
else if (req.url === '/kids'){
     res.write('<h1>Welcome to Kids</h1>')
    return res.end();
}
else if (req.url === '/Cart'){
     req.write('<h1>Welcome to Cart</h1>')
    return res.end();

}
res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
    <head>
        <nav>
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="men">Men</a></li>
                <li><a href="women">Women</a></li>
                <li><a href="kids">Kids</a></li>
                <li><a href="cart">Cart</a></li>
            </ul>
        </nav>
    </head>
</head>
<body>
    
</body>
</html>
    `)
    res.end();
});

server.listen(3001, () =>{
    console.log('Server running on http://localhost3001');
})