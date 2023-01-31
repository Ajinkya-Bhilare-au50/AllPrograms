//Function Returns Second Largest Number in Array
function getSecondLargest(nums) {
  nums.sort((x, y) => {
    return y - x;
  });
  for (let value of nums) {
    if (value !== nums[0]) {
      return value;
      break;
    }
  }
}
arr = [45, 12, 13, 17, 18, 199, 448, 566, 659];

console.log(getSecondLargest(arr));
