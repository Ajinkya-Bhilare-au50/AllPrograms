//ajinkya

prompt = require("prompt-sync")();

function reverse(n) {
  ReverseNo = 0;
  while (n != 0) {
    d1 = n % 10;
    ReverseNo = ReverseNo * 10 + d1;
    n = Math.floor(n / 10);
  }
}
n = prompt("Enter a number:  ");
n = n * 1; //type conversion from string to number
reverse(n);
console.log("Reverse number is " + ReverseNo);

