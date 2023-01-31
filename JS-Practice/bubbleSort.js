function bubbleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j <= arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 0, 78, 97, 63, 89, 105]));
