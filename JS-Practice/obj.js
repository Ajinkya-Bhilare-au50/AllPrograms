/* 
Attainuid:#29
week5-day4 CC
Q-1) Write a JavaScript program to list the properties of a JavaScript object.
Sample Output:
name,sclass,rollno

 */


var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
arry = []; //Empty Array
arry = Object.keys(student); //object keys are assigned to object array
console.log(arry.join(",")); //join method

/* 
----------Output-------------------
name,sclass,rollno

-----------------------------------
*/
