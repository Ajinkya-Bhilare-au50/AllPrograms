/* Q-1) Write a function that would allow you to do this.
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
You can create a closure to keep the value passed to the function createBase even after the inner
function is returned. The inner function that is being returned is created within an outer function,
making it a closure, and it has access to the variables within the outer function


A closure gives you access to an outer function’s scope from an inner function
A lexical environment is part of every execution context (stack frame) and is a map between 
identifiers (i.e. local variable names) and values.

Every function in JavaScript maintains a reference to its outer lexical environment. 
This reference is used to configure the execution context created when a function is invoked. 
This reference enables code inside the function to "see" variables declared outside the function, 
regardless of when and where the function is called.

If a function was called by a function, which in turn was called by another function, 
then a chain of references to outer lexical environments is created.
This chain is called the scope chain.

In the following code, inner forms a closure with the lexical environment of 
the execution context created when foo is invoked, closing over variable secret:
 */
/* function createBase(a) {
  console.log(a);
  return function top(p) {
    p + 6;
  }
  
  
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
 */
/* 
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
 */
/* 
function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2
// practical example3
var x = 10;
function foo(a) {
  var b = 20;

  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    return e * -1;
  }

  return bar;
}

var moar = foo(5); // Closure
/* 
  The function below executes the function bar which was returned 
  when we executed the function foo in the line above. The function bar 
  invokes boop, at which point bar gets suspended and boop gets push 
  onto the top of the call stack (see the screenshot below)
*/
// moar(15);
 