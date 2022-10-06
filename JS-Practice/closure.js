// closure-function inside function bounded with lexical scope
/* function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
// var temp = x();
// console.log(temp());
console.log(x()());

// ------------------------Method2

function t() {
  var p = 79;
  return function y() {
    console.log(z);
  };
}
 */

// 
function createBase(p) {
  // console.log("i am outer " + p);
  return function topper(t) {
    // console.log("i am inner" + (p+t));
    return p + t;
  }
  
}
var addSix = createBase(6);
console.log(addSix(10)); //calling inner function by passing 10 and adding 10 with 6
console.log(addSix(21)); //calling inner function by passing 21 and adding 21 with 6

/* 
--------OutPut-------
16
27
*/
