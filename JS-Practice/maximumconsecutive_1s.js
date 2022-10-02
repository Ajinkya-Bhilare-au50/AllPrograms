const prompt = require("prompt-sync")();

function bin(num) {
  var binn = [];
  var c;
  while (num != 1) {
    c = Math.floor(num / 2);
    binn.unshift(num % 2);
    num = c;
  }
  binn.unshift(1);
  return binn;
}
function getMaxLength(arr, n) {
  // initialize count

  let count = 0;

  // initialize max
  let result = 0;

  for (let i = 0; i < n; i++) {
    // Reset count when 0 is found
    if (arr[i] == 0) count = 0;
    // If 1 is found, increment
    // count and update result
    // if count becomes more.
    else {
      // increase count
      count++;
      result = Math.max(result, count);
    }
  }

  return result;
}
n = prompt("Enter a number :  ");
arr = [];
n = n * 1;
arr = bin(n);
console.log(arr);
N = arr.length;
console.log(getMaxLength(arr, N));
