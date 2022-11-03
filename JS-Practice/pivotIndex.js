//724 leetcode pivot index
var pivotIndex = function (nums) {
  const record = new Array(nums.length); //creating new arry of same length
  console.log(JSON.stringify(record));
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("sum1: " + sum);
    record[i] = sum;
    sum += nums[i];
    console.log(JSON.stringify(record));
  }
  sum = 0;
  console.log("\n");
    for (let i = nums.length - 1; i >= 0; i--) {
       console.log("sum2: " + sum);
    record[i] -= sum;
    sum += nums[i];
    console.log(JSON.stringify(record));
  }
  for (let i = 0; i < nums.length; i++) {
    if (record[i] === 0) return i;
  }
  return -1;
};
arr = [1, 3, 5, 6, 5, 4];
console.log(pivotIndex(arr));
