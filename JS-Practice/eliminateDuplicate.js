
//remove the duplicate elements in array
function eliminateDuplicates(arr) {
  var i,
    len = arr.length,
    out = [],
    obj = {};

  for (i = 0; i < len; i++) {
    obj[arr[i]] = 0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}

console.log(eliminateDuplicates([1, 6, 7, 3, 6, 8, 1, 3, 4, 5, 1, 7, 2, 6]));
