// const prompt = require("prompt-sync")();
// kindly run the code in browser

var inputArray = []; //create an empty array
var size = prompt("Enter number of elements in Array : "); //Array size

for (var i = 0; i < size; i++) {
  //Taking Array Input from user
  inputArray[i] = prompt("Enter Array Element " + (i + 1) + " :  ");
}

//Print the array in the console.
console.log("Your Input Array is  : " + inputArray);

//searching for maximum number inside inputArray
function Large(inputArray) {
  // The largest number at first should be the first element or null for empty array
  var largest = inputArray[0] || null;

  // Current number, handled by the loop
  var number = null;
  for (var i = 0; i < inputArray.length; i++) {
    // Update current number
    number = inputArray[i];

    // Compares stored largest number with current number, stores the largest one
    largest = Math.max(largest, number);
  }

  return largest;
}
p = Large(inputArray);

// for loop to find index of element

for (k = 0; k < inputArray.length; k++) {
  if (inputArray[k] == p) {
    index = k;
  }
}
//function to print output
function printoutput() {
  console.log("---------------------------------------------------------");
  console.log(
    "Maximum number is " + p + " and it's Index in Array is " + index
  );
  console.log("---------------------------------------------------------");
}
printoutput();

/* 
---------output------------------------------------------

Enter number of elements in Array : 5
Enter Array Element 1 :  45
Enter Array Element 2 :  69
Enter Array Element 3 :  98
Enter Array Element 4 :  78
Enter Array Element 5 :  99
Your Input Array is  : 45,69,98,78,99
---------------------------------------------------------
Maximum number is 99 and it's Index in Array is 4
---------------------------------------------------------

*/
