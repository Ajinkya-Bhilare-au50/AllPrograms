// closure-function inside function bounded with lexical scope
function x() {
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
