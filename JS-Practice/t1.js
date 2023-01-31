/* (Maximum marks - 15)
Q-1) Write a function to convert an array of string of numbers into a number and multiply it by 10.
Input: [‘1’,‘2’,‘3’,‘4’,‘5’,‘6’]
Output: 1234560 
week5-day5 CC
Ajinkya
*/
// kindly Run in Browser-------
//function declaration having x array as parameter
function conversion(x) {
  var combined = x.join(""); // Results in a string
  var combinedNumber = Number(x.join("")); // Results in a number
  console.log(
    "combined number : " +
      combined +
      " Type of element in array is " +
      typeof combined
  );
  console.log(
    "combined number : " +
      combinedNumber +
      " type of element now in array is converted to " +
      typeof combinedNumber
  );
  console.log(
    "combined number : " +
      combinedNumber +
      " is now multiplied by 10 : -----> " +
      combinedNumber * 10
  );
}
x = ["1", "2", "3", "4", "5", "6"]; //input array
conversion(x); //function call

/* 
---------------Output------------------------------------------------------
combined number : 123456 type of element in array is string
combined number : 123456 type of element now in array is converted to number
combined number : 123456 is now multiplied by 10 : -----> 1234560
============================================================================

*/
