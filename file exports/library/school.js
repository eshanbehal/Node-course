module.exports.average = array => {
  let sum = 0;
array.forEach(element => {sum += element;});
return (sum/array.length).toFixed(2);
};

module.exports.grades = {
best: 97,
average: 58
};