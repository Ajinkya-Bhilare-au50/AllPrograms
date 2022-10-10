let string = "abaccbnmnmnmnmcb";
count = 0;
var temp = 0;
tp = [];
// splits every letter in string into an item in our array
// let arr = string.split("");
const findMax = (arr) => {
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index] && max != arr[index]) {
      max = arr[index];
    }
  }
  return max;
};

for (i = 0; i <= string.length; i++) {
  for (j = i + 1; j <= string.length; j++) {
    if (string.charAt(i) == string.charAt(j)) {
      count = j - i - 1;
      tp.push(count);
    }
  }
 
}
p=findMax(tp);
console.log("Maximum Substring is " + p);

