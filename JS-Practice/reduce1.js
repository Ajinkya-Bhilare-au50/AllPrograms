/* 

(Maximum marks - 15)
AttainU Id: #37
Q-1) Take an integer array(length >10) as input from the user, and use reduce function to find the
average of the whole array

// Ajinkya
Week 8 – Day 1: Coding Challenge

run the code in terminal

*/

prompt = require("prompt-sync")();
n = prompt("Enter length of array : ");
a = [];
// console.log(n);
for (let i = 0; i < n; i++) {
  a[i] = Number(prompt("Enter Element " + (i + 1) + " of array "));
}
len = a.length;
// console.log(len);
var sum = a.reduce((acc, current) => {
  return acc + current;
}, 0); //initialise accumulator value to zero
// console.log(sum);
console.log("Average of Array is " + (sum / len));

/* 
-----------Output------------------
Enter length of array : 12
Enter Element 1 of array 10
Enter Element 2 of array 10
Enter Element 3 of array 10
Enter Element 4 of array 10
Enter Element 5 of array 10
Enter Element 6 of array 10
Enter Element 7 of array 10
Enter Element 8 of array 10
Enter Element 9 of array 10
Enter Element 10 of array 10
Enter Element 11 of array 10
Enter Element 12 of array 10
Average of Array is 10
------------------------------------

*/
