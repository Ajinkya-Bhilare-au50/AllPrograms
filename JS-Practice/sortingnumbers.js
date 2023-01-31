arr = [45, 18, 96, 456, 335, 889, 789, 235];
brr = arr;

arr.sort(function (a, b) {
  return a - b;
});
console.log("Ascending order is : " + arr);
brr.sort(function (a, b) {
  return b - a;
});
// sort according to string length

console.log("Descending order is : " + brr);
