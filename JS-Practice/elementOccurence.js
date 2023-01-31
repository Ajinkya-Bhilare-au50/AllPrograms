function ElementCounter(arr) {
  var count = {}; //<------------object count
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];

    count[num] = count[num] ? count[num] + 1 : 1;
  }
  return count;
}
arr = [0, 5, 5, 5, 5, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3]; //your array

prr = ElementCounter(arr);
console.log(prr);
const values = Object.values(prr);
const max = Math.max(...values);
// console.log(max);
function getObjKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}
maxElement = getObjKey(prr, max);
console.log(maxElement); // max element
