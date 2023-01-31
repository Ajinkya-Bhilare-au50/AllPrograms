var arr = [2, 6, 16, 8, 8, 99, 5, 8, 9, 49, 49];
arr.sort(function (a, b) {
  return a - b;
});
console.log("Sorted array " + arr);
tap = [];
var p;
for (i = 0; i <= arr.length; i++) {
  if (arr[i] != arr[i + 1]) {
    p = arr[i];
    tap.push(p);
  }
}

console.log("Non Duplicated array " + tap);
