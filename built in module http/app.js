const http = require('http');
const url = require('url');
//connection sewttings
//port- a port is an end point of communication
const port = 3000;
//hostname - IP which is associated with any device which is connected to computer network.
const hostname = '127.0.0.1';

const cars = [
  {
      make: 'Audi',
      model: 'A3',
      year: '2015',
      price: 10000,
      transmission: 'Automatic',
      url: `https://images.pexels.com/photos/2394/lights-clouds-dark-car.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
  },
  {
      make: 'Mercedes',
      model: 'B Class',
      year: '2018',
      price: 20000,
      transmission: 'Manual',
      url: `https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
  },
  {
      make: 'Ford',
      model: 'Focus',
      year: '2018',
      price: 13000,
      transmission: 'Manual',
      url: `https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
  }
];
//callback function to be executed when a user makes a request to our server
const respond = (request, response) => {
    if(request.url !== '/favicon.ico'){
        console.log(request.url);
        const query = url.parse(request.url, true).query;
        console.log(query);
        const pathname = url.parse(request.url, true).pathname;  
        console.log(pathname);
      
      }
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