const sum = require("./lib/sum.js")
const subtract = require("./lib/subtract.js")


console.log(sum(4, 2));
console.log(subtract(7,2));

module.exports = { sum, subtract}; 