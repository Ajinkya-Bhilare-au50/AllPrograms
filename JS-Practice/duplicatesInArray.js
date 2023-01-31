// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

function sockMerchant(n, ar) {
  // Write your code here- it return number of duplicate elements in array using JS

  ar.sort();
  let count = 0;
  let cur = ar[0];
  for (let i = 1; i < n; i++) {
    if (cur == ar[i]) {
      i++;
      count++;
      cur = ar[i];
    } else cur = ar[i];
  }
  return count;
}
const p = sockMerchant(12, [45, 45, 78, 96, 56, 56, 35, 35, 87, 87, 87, 87]);
console.log(p);
