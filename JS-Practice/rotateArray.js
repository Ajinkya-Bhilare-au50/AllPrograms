function RotateArray(arr, n) {
  result = [];
  drr = [];
  t = arr.length - n;
  console.log(t);
  for (i = t; i < arr.length; i++) {
    temp = arr[i];
    drr.push(temp);
  }
  //   console.log(drr);
  //   console.log(arr);
  for (j = 1; j <= n; j++) {
    arr.pop();
  }
  // console.log(arr);
  result = [...drr, ...arr];
  console.log(arr);
//   console.log(result);
}
arr = [4, 5, 8, 1, 12, 13, 78, 56, 45, 44, 77, 99];
n = 3;
RotateArray(arr, n);
