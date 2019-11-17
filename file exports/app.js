//module
console.log(module);


const greeting = require('./library/greeting.js');
greeting();

const average = require('./library/school.js').average;
console.log(average([87,85,73,75,90.309]));

console.log(require('./library/school.js').grades);