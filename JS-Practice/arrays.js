//arrays in JS

// var fruits=["Apple","Banana","Chickoo","Grapes"]
// Flength=fruits.length;
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[Flength-1]);

function ajinkya() {
  console.log("Age 29");
  console.log("Ajinkya Bhilare");

  console.log("Qualification:B-tech in Electronics ");
}
ajinkya();
ajinkya();

// arrays and methods in array
let names = ["manish", "shiny", "4", "parrot"];
console.log(names.length);
console.log(names[2]);
console.log(names.length - 1);
//concat to combine two arrays
const lastNames = ["onion", "banana", "chickoo"];
const allNames = [names.concat(lastNames)];

// arr.push(items)---adds the item at the end
// arr.pop(items)----extracts the item from the end
// arr.shift()---extracts an item from the beginning
// arr.unshift(items)--adds items to the beginning
let arr = ["pandya", "dhoni", "sachin", "rahul"];
console.log(arr);
delete arr[1];
console.log(arr);
console.log(arr.length);
// arr.splice method can insert,remove and replace elements

let arri = ["I", "Study", "Online"];
arri.splice(1, 1); //from index 1 remove 1 element
console.log(arri);

let my = ["sachin", "Dhoni", "rahul", "pankaj"];
my.splice(0, 3, "Let's", "dance"); //from 0th index remove three element and replace it with Lets dance
console.log(my);
let fruit = ["orange", "grapes", "chickoo", "custard", "mushroom"];
for (i = 0; i <= fruit.length; i++) {
  console.log("hello");
}
 