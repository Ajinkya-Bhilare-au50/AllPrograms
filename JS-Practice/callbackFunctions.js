//callbackfunctions
let fun = () => {
  a = 100;
  a += 5;
  return a--;
};

let fun2 = () => {
  console.log(fun());
};
fun2();
// call backback is called after Trigger events

// "I will call back later!"

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

function myFirst() {
  console.log("Hello");
}

function mySecond() {
  console.log("Goodbye");
}
mySecond();
myFirst();

//example of Callback Functions

function result() {
  console.log("Call Back Function");
}

function addNumbers(num1, num2, callBackFunction) {
  let sum = num1 + num2;

  callBackFunction(sum);
}

// Test case
addNumbers(15, 15, result);

// Note: Remember not to use parenthesis at passing a function as an argument.

/*
When to Use a Callback?
The examples above are not very exciting.

They are simplified to teach you the callback syntax.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

Asynchronous functions are covered in the next chapter.

example1
function print(callback) {  
    callback();
}
*/
function taskone() {
  console.log(" Task1 ");
}
function tasktwo(typo) {
  console.log("Task 2");
  typo()

}
setTimeout(taskone,2000);
tasktwo(tasktwo);
