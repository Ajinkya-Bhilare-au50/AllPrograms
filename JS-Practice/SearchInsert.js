//program returns the appropriate index if element is not found in array 

var ElementSearch = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    nums[mid] > target ? (end = mid) : (start = mid + 1);
  }
  if (start === end) {
    return target <= nums[start] ? start : start + 1;
  }
};

nums = [1, 3, 5, 7, 8, 11, 16, 19];
target = 11;
console.log(ElementSearch(nums, target));
