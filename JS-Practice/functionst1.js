// Code refactoring;
var calculateTotal = function (SubTotal, tax) 
{
  return SubTotal + tax;
};

var order1 = calculateTotal(10000, 1500);
var order2 = calculateTotal(9000, 600);
var order3 = calculateTotal(70000, 150);
console.log(order1, order2, order3);
