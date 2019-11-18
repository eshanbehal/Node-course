//you can use the builtin file system module in node.js to manage files and read/write /etc
const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';


//check if mars exist:
console.log(fs.existsSync(mars));

//read mars
let data = fs.readFileSync(mars, 'utf-8');
console.log(`${mars} content: ${data}`);

//create jupiter or override content
fs.writeFileSync(jupiter, 'jupiter has the shortest day of all the planets.');
//read jupiter
data = fs.readFileSync(jupiter, 'utf-8');
console.log(`${jupiter} content: ${data}`);