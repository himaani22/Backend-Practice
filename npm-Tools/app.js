const http = require('http');              //Using Modules


const server =  http.createServer()
const PORT = 3002;
server.listen(PORT , () =>{
    console.log(`Server running on port ${PORT}`);
});