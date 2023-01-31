// k is number of operations
// s is the string
//n is  no of digits in string

function highestValuePalindrome(s, n, k) {
   const arr = Array.from(s);
   for (let i = 0, j = n - 1; i < j; i++, j--) {
     if (arr[i] !== arr[j]) {
       if (k < 1) return "-1";
       const currMax = arr[i] > arr[j] ? arr[i] : arr[j];
       (arr[arr[i] === currMax ? j : i] = currMax), k--;
     }
   }
   for (let i = 0, j = n - 1; i <= j && k > 0; i++, j--) {
     if (arr[i] !== "9") {
       if (s[i] !== s[j]) (arr[i] = "9"), (arr[j] = "9"), k--;
       else if (i === j) arr[i] = "9";
       else if (k > 1) (arr[i] = "9"), (arr[j] = "9"), (k -= 2);
     }
   }
   return arr.join("");
}
t = highestValuePalindrome("092282", 6, 3);
console.log(t);
