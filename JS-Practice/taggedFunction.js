/* 
Q-2) Write a tagged function to print the following sentence: 
Homework must be atleast 80% to ensure my future. 
Attendance must be atleast 80% to ensure my success. 
1 variable for Homework/Attendance. 
1 variable for 80 (percentage). 
1 variable for future/success. 
Week7 – Day5: Coding Challenge

kindly run on Node-Js
*/
var homework = ["Homework", "Attendance"];
// try changing percentage variable from 0-100% it will display appropriate literal
var percentage = 69; //<--USER INPUT<---if percentage<=80 it will display above template
//if percentage > 80 it will show : Congratulation you are eligible for placement
var success = ["future", "success"];

//Tagged template literal return in exact format
//with the help of rest operator collect all the parameters
function AttainU_Life(tagged, ...rest) {
  //   console.log(tagged);
  //   console.log(rest);
  if (percentage <= 80) {
    rest[1] = 80; //mandatory percentage Requirement
    rest[4] = 80; //mandatory percentage Requirement

    return `${rest[0]} ${tagged[1]} ${rest[1]} ${tagged[2]} ${rest[2]} ${tagged[3]}.
${rest[3]} ${tagged[4]} ${rest[4]} ${tagged[5]} ${rest[5]}`;
  } else return `"Congratulations You are Eligible for Placement" `;
}
console.log(
  AttainU_Life`${homework[0]} must be atleast ${percentage}% to ensure my ${success[1]} ${homework[1]} must be atleast ${percentage}% to ensure my ${success[0]}`
);

/* 
-----------output------------------------------------------
Homework  must be atleast  80 % to ensure my  success  .
Attendance  must be atleast  80 % to ensure my  future

*/
