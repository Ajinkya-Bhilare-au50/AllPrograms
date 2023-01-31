// let i = 5;
// do {
//   console.log("happy");
//   i++;
// } while (false);
//----npm install prompt sync
const prompt = require("prompt-sync")();

const name = prompt("What is your Full Name? ");

var number = Number(prompt("What is your roll-number? "));
console.log(`Hey there ${name}`);
console.log("Your Roll-number is : " + number);
