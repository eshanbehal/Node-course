//you can use the builtin file system module in node.js to manage files and read/write /etc
const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';


//check if mars exist:
console.log(fs.existsSync(mars));

//read mars
const data = fs.readFileSync(mars, 'utf-8');
console.log(`${mars} content: ${data}`);