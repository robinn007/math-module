const sum = require("./lib/sum.js")
const subtract = require("./lib/subtract.js")
const multiply = require("./lib/multiply.js")


console.log(sum(4, 2));
console.log(subtract(7,2));
console.log(multiply(7,2));


module.exports = { sum, subtract, multiply}; 