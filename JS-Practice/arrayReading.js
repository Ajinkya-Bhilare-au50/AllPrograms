/* 
Attainuid:#25 
Q-1) Write a function to take input from the user and feed it into an array. 
Take input (in this question only) from the user for length of the array also. 

*/
//Ajinkya-week5-Day1-cc
const prompt = require("prompt-sync")(); //  <---------kindly comment this line to run in browser----------
n = prompt("Enter no of Elements in array : ");
inArray = []; //create an empty array
RArray = [];
//reading input array from terminal
function ReadingArray() {
  for (i = 0; i < n; i++) {
    inArray[i] = prompt("Enter Array Element " + (i + 1) + " :  ");
  }
  return inArray;
}
RArray = ReadingArray();
//console.log(typeof n);
n = Number(n);
console.log("Array has " + n + " Elements");
console.log("Your input Array is : " + RArray);

/* 
--------------Output---------------------
Enter no of Elements in array : 7
Enter Array Element 1 :  45
Enter Array Element 2 :  78
Enter Array Element 3 :  96
Enter Array Element 4 :  87
Enter Array Element 5 :  65
Enter Array Element 6 :  84
Enter Array Element 7 :  76

Array has 7 Elements
Your input Array is : 45,78,96,87,65,84,76



*/
