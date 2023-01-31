const prompt = require("prompt-sync")();
var inputArray = []; //create an empty array
var size = prompt("Enter number of elements in Array : "); //Array size

for (var i = 0; i < size; i++) {
  //Taking Array Input from user
  inputArray[i] = prompt("Enter Array Element " + (i + 1) + " :  ");
}

//Print the array in the console.
console.log("Your Input Array is  : " + inputArray);

max = 0; //initialise max counter to zero
index = 0; //initialise index

//searching for maximum number inside inputArray
for (j = 0; j < size; j++) {
  if (inputArray[j] > max) {
    max = inputArray[j];
    index = j;
  }
}
function printoutput() {
  console.log("---------------------------------------------------------");
  console.log("Maximum number is " + max + " and it's Index is " + index);
  console.log("---------------------------------------------------------");
}
printoutput();

/* 
--------------------output------------------------------

Enter number of elements in Array : 5
Enter Array Element 1 :  2
Enter Array Element 2 :  4
Enter Array Element 3 :  6
Enter Array Element 4 :  8
Enter Array Element 5 :  10
Your Input Array is  : 2,4,6,8,10
---------------------------------------------------------
Maximum number is 8 and it's Index is 3
--------------------------------------------------------- 
*/
