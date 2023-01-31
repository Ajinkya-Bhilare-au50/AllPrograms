// array declaration syntax
// function myArrayMax(arr2) {
//   let len = arr2.length;
//   let max = -Infinity;
//   while (len--) {
//     if (arr2[len] > max) {
//       max = arr2[len];
//     }
//   }
//   return max;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// arr.push(11);
// console.log(arr);
// array1 = []; //simply creates  an Empty Array with name array1
// // ---------------Doubt?--Sort is not working for larger numbers-------------------------------------
// var arrw = [9, 1145, 2, 4, 5, 7];

// console.log(arrw);
// arrw.sort();
// console.log("sorted array " + arrw);
// arrw.reverse();

// console.log("reversed array " + arrw);

// // ----------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-------------
// d = myArrayMax(arrw);
// console.log("max is : " + d);

// random array sorting ascending--------
const points = [40, 100, 1, 5, 25, 10, 1034, 1290];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.join(" * "));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

/*Automatic toString()
JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();
*/