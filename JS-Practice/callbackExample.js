//  Example of Callbacks
// function Morning(name) {
//   return "i am happy";
// }

// function greet(name, pc) {
//   const myName = "john";
//   console.log("my name is " + name);
//   pc();
// }
// greet("ajinkya", Morning);
// greet("Mahesh",Morning);
/*
A callback function is a function passed into another function
as an argument, which is then invoked inside the outer function
to complete some kind of routine or action. 
*/
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
// The above example is a synchronous callback, as it is executed immediately.

/*
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
  const myName = 'john';
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bobo', morning);
greet('peter', afternoon);
*/

// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an an argument and executed inside that function

// function greetMorning(name) {
//   const myName = 'john';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = 'susan';
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }