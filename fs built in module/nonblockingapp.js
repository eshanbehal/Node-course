//Use the fs module the asynchronous way through callback functions.
const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';



//JS code in this case is unblocking, meaning JS can move to the next line while an fs operation is waiting for the callback to be executed.


//check if a file exists: method 1


//change the permissions of mars.txt to: 0444


//check if a file exists: method 2


//read/write/append: