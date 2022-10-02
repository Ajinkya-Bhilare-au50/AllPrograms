/* 
Q-1) Write a function to sort an array of numbers.
Input: [8,5,6,3]  
Output: [3,5,6,8]

*/
// Run this  program in Node Js 
//node SortingNumbers1.js            <-------Copy paste to execute the program using Terminal
// ==================Method-1=for custom inputs======================================
const prompt = require("prompt-sync")(); //<------------------
function ascending(a, b) {
  return a - b;
}
function descending(a, b) {
  return b - a;
}
arr = []; // An empty array to read inputs
console.log(
  "----------------Method 1 output--------------------------------------"
);
N = prompt("Enter No of Elements in Array : ");


//read the array from user
for (let i = 0; i < N; i++) {
  temp = i + 1;
  arr[i] = prompt("Enter element " + temp + " of array: ");
}
// select ascending or descending order you want to sort the input array
input = prompt(`Press "1" for ascending and "2" for Descending :  `);
if (input == 1) {
  arr.sort(ascending);
  console.log("Ascending Sorted Array is : " + arr);
} else if (input == 2) {
  arr.sort(descending);
  console.log("Descending Sorted Array is : " + arr);
} else if (input != 1 && input != 2) {
  console.log("!!! Wrong input ,Please try again");
}
// =================Method-1 completed ===========================================================
/* 
---------Output--(test1 ascending)------------------------------
Enter No of Elements in Array : 7
Enter element 1 of array: 96
Enter element 2 of array: 89
Enter element 3 of array: 56
Enter element 4 of array: 89
Enter element 5 of array: 57
Enter element 6 of array: 86
Enter element 7 of array: 5
Press "1" for ascending and "2" for Descending :  1
Ascending Sorted Array is : 5,56,57,86,89,89,96

---------Output--(test2 Descending)------------------------------
Enter No of Elements in Array : 7
Enter element 1 of array: 89
Enter element 2 of array: 65
Enter element 3 of array: 4
Enter element 4 of array: 3
Enter element 5 of array: 58
Enter element 6 of array: 78
Enter element 7 of array: 96
Press "1" for ascending and "2" for Descending :  2
Descending Sorted Array is : 96,89,78,65,58,4,3
*/

// ==================Method-2==Alternate Traditional Method using Bubblesort algorithm============
//Function Declaration
function bubbleSort(Array) {
  let len = Array.length;
  for (let i = 0; i < len; i++) {
    //you can also use "for in", so you don't need the variable "len"
    for (let j = 0; j < len; j++) {
      if (Array[j] > Array[j + 1]) {
        let tmp = Array[j];
        Array[j] = Array[j + 1];
        Array[j + 1] = tmp;
      }
    }
  }
  return Array;
}
Arry = [8, 5, 6, 3];//array initialisation
console.log("----------------Method 2 output--------------------------------------");
console.log("input array is "+Arry)
console.log("Ascending order sorted Array is " + bubbleSort(Arry));

/* 
------------output---------------
input array is 8,5,6,3
Ascending sorted Array is 3,5,6,8

*/
// ======================================================================