const http = require('http');

//connection sewttings
//port- a port is an end point of communication
const port = 3000;
//hostname - IP which is associated with any device which is connected to computer network.
const hostname = '127.0.0.1';

//callback function to be executed when a user makes a request to our server
const respond = (request, response) => {
    if(request.url !== '/favicon.ico'){
        console.log(request.url);}
    //response.setHeader(headername, value)
    response.setHeader('Content-Type', 'text/plain');
    //response.writeHead(status code, {headers})
    response.writeHead(200, {'Content-Type': 'text/html'});
    //response.write sends the body of the response.
    response.write(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>JS Bin</title>
    </head>
    <body>`);
    response.write('<p>Node is fun.</p>');
    response.end(`</body>
    </html>`);
 
};



//create a server
const server = http.createServer(respond);

//listen to user request
server.listen(port, hostname, () => {console.log(`Listening on port: ${port}, hostname: ${hostname}`)});