//you can use the builtin file system module in node.js to manage files and read/write /etc
const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';


//check if mars exist:
console.log(fs.existsSync(mars));