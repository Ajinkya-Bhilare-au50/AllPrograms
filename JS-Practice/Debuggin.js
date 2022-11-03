/* //import syntax-----> const Desired_name = require("./filename")
const Duplicate = require("./duplicateElements.js");
// -----------------------------------------------------
const prompt = require("prompt-sync")();
console.log("Enter the size of Array ");
num = Number(require("prompt-sync")()());
var arr = [];
for (i = 0; i < num; i++) {
  arr[i] = Number(prompt("Enter the element " + (i + 1) + ":  "));
}
console.log("Entered array is ", arr);
var c = arr.length;
function callback(accumulator, value, _id, _arr) {
  let t = accumulator + value;
  return t;
}
let a = arr.reduce(callback);
// console.log(a);
console.log("Average of arr is " + a / c);
// ----------------------------------------------------------

m = arr; //Suppose I need to find duplicate in the array
s = [];
s = Duplicate(m);
console.log(s);
 */
const tap = document.getElementsByClassName("trial");
// console.log(tap);
const pat = document.querySelector("Second");
// console.log(pat);
const sat = (document.getElementById("id45").style.backgroundColor = "#045862");
// console.log(sat);
document.getElementById("your").style.fontSize = "650%";
document.getElementById("tour").style.fontSize = "450%";
document.getElementById("tour").style.color = "white";

const patter = new Set([1, 2, 4, 5, 8, 9, 9, 9, 10]);
console.log(typeof patter);
console.log(Object.keys(patter));
console.log(Object.values(patter));
