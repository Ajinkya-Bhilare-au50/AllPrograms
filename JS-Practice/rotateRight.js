let arr = [2, 4, 6, 8, 5, 7, 11];
//Right Rotation of array
function rotateRight(arr) {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}

rotateRight(arr); // output [8, 2, 4, 6]
console.log("rotated array is " + arr);

let arr1 = [5, 14, 17, 18, 15, 19, 46, 45, 17];
//Left Rotation of array
function rotateLeft(arr1) {
  temp = arr1.shift();
  arr1.push(temp);
  return arr1;
}
console.log("Left Rotated Array is : " + rotateLeft(arr1));
