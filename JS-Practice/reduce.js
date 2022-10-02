//reduce
//iterates , callback function
//reduces to a single vale -number
// 1parameter ("acc")-total of all calculations
// 2parameter ("curr")-current iteration/value
const people = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "oeter", age: 20, position: "developer", id: 1, salary: 700 },
  { name: "mangi", age: 20, position: "developer", id: 1, salary: 500 },
  { name: "bopyt", age: 20, position: "developer", id: 1, salary: 800 },
  { name: "tomb", age: 20, position: "developer", id: 1, salary: 900 },
];
/*
const total = people.reduce(function (acc, currItem) {
  console.log(acc);
  console.log(currItem);
  return acc;
}, 0);

*/
const total = people.reduce(function (acc, currItem) {
  console.log(`total${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  console.log(currItem);
  return acc;
}, 0);
// 0 is the initial value
console.log(total);

