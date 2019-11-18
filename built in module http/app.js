const http = require('http');

//connection sewttings
//port- a port is an end point of communication
const port = 3000;
//hostname - IP which is associated with any device which is connected to computer network.
const hostname = '127.0.0.1';

//callback function to be executed when a user makes a request to our server
const respond = (request, response) => {
    console.log(request);  
};



//create a server
const server = http.createServer(respond);

//listen to user request
server.listen(port, hostname, () => {console.log(`Listening on port: ${port}, hostname: ${hostname}`)});