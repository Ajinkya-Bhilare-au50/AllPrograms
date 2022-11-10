var sumOfUnique = function (nums) {
  let obj = {};
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  console.log(obj);
  let sum = 0;
  result = []; //it will collect the desired elements

  for (var key in obj) {
    if (obj[key] == 1) result.push(k);
  }
  sum = result.reduce((a, b) => Number(a) + Number(b), 0);

  console.log(result);
  console.log(sum);
  //  return sum;
};
sumOfUnique([8, 9, 9, 10]);
