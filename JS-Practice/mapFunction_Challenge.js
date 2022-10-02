// map function is widely used for transformation

const array = [23, 24, 65, 78, 97, 90, 45, 90];
// double of array
//triple of array
//square of array
// transformation of array using map function
//akshay Saini ultimate on youTube
function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function square(x) {
  return x * x;
}
function cube(x) {
  return x * x * x;
}
function factorial(x) {
  if (x < 0) return;
  if (x < 2) return 1;
  return x * factorial(x - 1);
}
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

const Double_nos = array.map(double);
console.log(Double_nos);
const Binary_nos = array.map(dec2bin);
console.log(Binary_nos);

/* 
// Ajinkya Sir (Self-Motivation)
//20-September-2022
function keepTrying() {
  console.log("Work Hard");
}
Success = "Billionaire ";
Milestone = " ";

if (Success != Milestone) {
  keepTrying();
} 
else Congratulation();

 */