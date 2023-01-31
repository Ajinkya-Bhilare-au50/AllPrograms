/* (Maximum marks - 15)
Attainuid:#28
Q-1) Write a program to print even numbers of an array of numbers using for…of Loop

*/
array1 = [13, 14, 17, 18, 19, 10, 30, 65, 75, 57, 89, 90, 103, 102, 108, 106];

even = []; //empty array to collect Even Numbers
for (const element of array1) {
  temp = element; // moving element of array1 to temp variable.
  if (temp % 2 == 0) even.push(temp);
}

console.log("Even Numbers inside the given array are " + even);

/* 
----------------------Output--------------------------------------
Even Numbers inside the given array are 14,18,10,30,90,102,108,106

*/
