// const prompt = require("prompt-sync")();
// number=prompt("Enter a number ")
function multiply(a, b) {
  return a * b;
}
function square(a) {
  return a * a;
}

function sum(a, b) {
  return a + b;
}

c = sum(3, 4);
console.log("sum is " + c);
c = sum(3, 8);
console.log("sum is " + c);
d = multiply(2, 5);
console.log("multiply is " + d);

t = square(5);
console.log("square is " + t);

//function Expression----- a=10,a=c+d
function tr(op) {
  pi = op + 10;
  return pi;
}
z = tr(5);
console.log(z);

//Callback functions
// Arrow functions

// Normal Function in JavaScript
function Welcome() {
  console.log("Normal function");
}
//Function Expressions
Welcome = function () {
  console.log("Normal function");
};
// Arrow Function
const Welcome = () => {
  console.log("Arrow function");
};
