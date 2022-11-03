//Array of Bonus received by employees During Diwali
Bonus = [
  1000, 3000, 500, 70, 900, 110, 1200, 140, 1800, 180, 4000, 78, 279, 5000,
];
let t = Bonus.reduce(function (acc, element, index, Array) {
  if (element > acc) {
    acc = element;
  }
  return acc;
}, 0); //initial value of acc
console.log(t);
