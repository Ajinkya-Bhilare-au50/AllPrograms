prompt = require("prompt-sync")();
a = 2567;
console.log(a);
console.log(typeof a);
input = prompt("Enter a number : ");
console.log("i was a " + typeof input);
input = input * 1; //to convert string to number-Method1
console.log("i am now a " + typeof Number(input)); //<------------method2
console.log("number after multiplication : " + typeof input);

// ------------------------------------------------------------------------ 

a = 45.878989529;
console.log(a);
console.log(Math.floor(56.893256));
console.log(Math.floor(a)); //rounds to lower whole number
console.log(Math.round(a)); //rounds to upper whole number
console.log(Math.ceil(a)); //rounds to upper whole number
console.log(Math.pow(3, 3)); // 3 raised to 3
console.log(Math.pow(2, 3)); //2 raised to 3
console.log(Math.trunc(4589.7536633));
p = 96.6989656956;
console.log(p.toFixed(5)); // rounding of a number to a specified decimal
console.log(Math.sqrt(81)); // take the square root directly
console.log(Math.log(10)); //taking log
function getTanFromDegrees(degrees) {
  return Math.sin((degrees * Math.PI) / 180);
}
console.log(getTanFromDegrees(30));
console.log(getTanFromDegrees(90));
console.log(Math.PI);
