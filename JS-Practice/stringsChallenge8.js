const prompt = require("prompt-sync")();

function fullName() {
  fName = prompt("enter first name  ");
  lName = prompt("enter last name ");
  age1 = prompt("Enter age ");

  console.log(`full Name: ${fName} ${lName}`);
  console.log(`Age is ${age1}`);
}
g = fullName();
