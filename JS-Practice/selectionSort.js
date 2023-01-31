function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort([45, 15, 78, 98, 56, 3, 7]));
