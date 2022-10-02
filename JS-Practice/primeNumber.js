// prime number program iteration

let n = prompt("Tell me the number");

for (let i = 2; i <= n; i++) {
  let count = 0;
  for (let j = 2; j <= i; j++) {
    if (i % j == 0) ++count;
    if (count > 1) break;
  }
  if (count == 1) alert(i);
}


alert( null === undefined ); // false
alert( null == undefined ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true


console.log(3 ** 4);
// expected output: 81

console.log(10 ** -2);
// expected output: 0.01

console.log(2 ** 3 ** 2);
// expected output: 512

console.log((2 ** 3) ** 2);
// expected output: 64