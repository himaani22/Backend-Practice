const http = require('http');              //Using Modules

const userRequestHandler = require('./user')
const server =  http.createServer(userRequestHandler)
const PORT = 3001;
server.listen(PORT , () =>{
    console.log(`Server running on port ${PORT}`);
});