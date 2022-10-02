const prompt = require("prompt-sync")();
number=prompt("Enter your favourite number: ")
pandu = prompt("Enter your favourite person: ");

var i = 1;
while (i <= number) {
  console.log(i+" "+ pandu);
  i++;
}
