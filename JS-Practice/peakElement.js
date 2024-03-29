// A JavaScript program to find a peak element
// 
// Find the peak element in the array
function findPeak(arr, n) {
  // first or last element is peak element
  if (n == 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;

  // check for every other element
  for (var i = 1; i < n - 1; i++) {
    // check if the neighbors are smaller
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }
}

// Driver Code
var arr = [75,10,15,16,18,19,10,49,105];
var n = arr.length;
console.log("Index of a peak point is " + findPeak(arr, n));
