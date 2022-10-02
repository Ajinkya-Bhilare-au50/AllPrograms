const prompt = require("prompt-sync")();
function o(n) {
  return n + ([, "st", "nd", "rd"][~~((n / 10) % 10) - 1 ? n % 10 : 0] || "th");
}

p = prompt("Enter a Number of Elements in Array ");
arr = [];
for (let j = 0; j < p; j++) {
  arr[j] = prompt("Enter " + o(j + 1) + " Element of Array : ");
}
console.log("Array consist of " + p++ + " Elements which are " + arr);
