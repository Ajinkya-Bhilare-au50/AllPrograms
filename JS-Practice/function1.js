// function which returns value
prompt = require("prompt-sync")();
function factorial(n) {
  if (n < 0) return;
  if (n < 2) return 1;
  return n * factorial(n - 1);
}
function add(a, b, c) {
  return a + b + c;
}

function subtraction(a, b) {
  return a - b;
}

function addition(a, b) {
  return a + b;
}

function multiplier(a, b) {
  return a * b;
}

function test(n) {
  if (n % 2 == 0) return "I am Even";
  else return "I am Odd";
}

a = prompt(" Enter a number : ");
console.log(factorial(a));

// console.log(add(4, 5, 7));
// console.log(add(4, 7, 8));
// console.log(add(5, 5, 5));
/* a = prompt("Enter a number1 for add ");
b = prompt("Enter a number2 for add ");
c = prompt("Enter a number1 for multiply ");
d = prompt("Enter a number2 for multiply ");
e = prompt("Enter a number1 for sub ");
f = prompt("Enter a number for sub ");
a = a * 1;
b = b * 1;
c = c * 1;
d = d * 1;
e = e * 1;
f = f * 1;
// n = Number(n);
console.log(addition(a, b));
console.log(multiplier(c, d));
console.log(subtraction(e, f)); */

// pandu = multiplier(n);
// console.log(pandu);
// console.log(multiplier(n));
// homework1 make a function that multiply number by 2
// homework2 make a function that returns factorial
//  homework make a function that returns addition,multiplication of 4 numbers
