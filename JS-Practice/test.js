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

// Driver code
let arr = new Array(1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1);
let n = arr.length;
console.log(getMaxLength(arr, n));
