function bubbleSort(arr) {
  i = 0;
  while (i < arr.length) {
    j = 0;
    while (j <= arr.length) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
    i++;
  }
  return arr;
}

console.log(bubbleSort([2, 25, 78, 97, 63, 89, 105,56,89]));
