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
function createBase(a) {
  a = 19; //just random numbers initialised
  function top(p) {
    p = 43; //just random numbers initialised
    return 16;
  }
  top();
  return 27;
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
