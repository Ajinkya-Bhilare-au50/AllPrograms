arr = [4, 5, 6, 7, 9, 8, 14, 19, 44];

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function increment14(a) {
  return a + 14;
}

function subtract3(a) {
  return a - 3;
}

//Map Function transforms the array into new array
// console.log(arr.map(square));
// console.log(arr.map(subtract3));

console.log(arr.map((a) => a * 2));
