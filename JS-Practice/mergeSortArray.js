nums1 = [1,2,3,0,0,0];
m = 3;
n = 3;
nums2 = [1,2,2,3,5,6];
var merge = function (nums1, m, nums2, n) {
  result1 = [];
  result2 = [];
  result = [];

  for (let i = 0; i < m; i++) {
    let x = nums1[i];
    result1.push(x);
  }

  for (let j = 0; j < n; j++) {
    let y = nums2[j];
    result2.push(y);
  }

  result = result1.concat(result2);
  nums1 = [];
  nums1 = [...result];

  nums1.sort(function (a, b) {
    return a - b;
  });
  console.log(nums1);
  
  
};
merge(nums1, m, nums2, n);
