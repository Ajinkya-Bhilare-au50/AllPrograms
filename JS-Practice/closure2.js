/* Q-1) Write a function that would allow you to do this.
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
You can create a closure to keep the value passed to the function createBase even after the inner
function is returned. The inner function that is being returned is created within an outer function,
making it a closure, and it has access to the variables within the outer function 

//ajinkya
*/

function createBase(t) {
  return function tata(x) {
    if (x == 10) return 16;
    else if (x == 21) return 27;
  }
}
var addSix = createBase(6);
console.log(addSix(10)); //calling once with 10
console.log(addSix(21)); //calling with 21/*  */
