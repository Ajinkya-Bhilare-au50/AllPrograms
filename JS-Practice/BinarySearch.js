function binarySearch(arr, element) {
  start = 0;
  end = arr.length - 1;
  indx = -1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] === element) {
      console.log("element found at index " + mid);
      break;
      // return
      // return mid;
    } else if (element > arr[mid]) {
      start = mid + 1;
    } else if (element < arr[mid]) {
      end = mid - 1;
    }
  }
}
arr = [4, 5, 9, 11, 13, 15, 17, 19, 21, 28, 63, 93];
element = 21;
binarySearch(arr, element);
