


const colorCodes = ["#FFFFFF", "#000000", "#FF0000", "#808080", "#FFFF00"];

const { 0: firstColor, 4: lastColor } = colorCodes;
console.log(firstColor); // #FFFFFF
console.log(lastColor); // #FFFF00

// ----------------------------------------------------------------------
let person = {
  name1: "John",
  age: 21,
  gender: "male",
};

let { name1, age, gender } = person;

console.log(name1, age, gender);
// -----------------------------------------------------------------------
const cars = ['Toyota', 'Honda', 'BMW'];
let [x, y, z] = [...cars];
console.log(x); // Toyota
console.log(y); // Honda
console.log(z); // BMW
// -------------------------------------------------------------------------
// Define a destructuring object with two regular variables and one rest variable:
const { firstName, lastName, ...otherInfo } = {
  firstName: "Oluwatobi",
  lastName: "Sofela", 
  companyName: "CodeSweetly",
  profession: "Web Developer",
  gender: "Male"
}

// Invoke the otherInfo variable:
console.log(otherInfo);

// The invocation above will return:
// {companyName: "CodeSweetly", profession: "Web Developer", gender: "Male"}

// -------------------------------------------------------
const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe);

// The invocation above will return:
["Oluwatobi", "Sofela", "is", "my", "name."];

// -------------------------------------------------------------------
// string destructuring
const myName1 = "Oluwatobi Sofela";

console.log([...myName1]);

// The invocation above will return:
[
  "O",
  "l",
  "u",
  "w",
  "a",
  "t",
  "o",
  "b",
  "i",
  " ",
  "S",
  "o",
  "f",
  "e",
  "l",
  "a",
];

// -------------------------------------------------------------
const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));

// The invocation above will return:
// 16;
// --------------------------------------------------------------------
const numbers3 = [1, 3, 5, 7, 10, 200, 90, 59];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers3));

// The invocation above will return:
// 16;

// ---------------------------------------------------------------
const myNames = ["Oluwatobi", "Sofela"];
const bio = { ...myNames, runs: "codesweetly.com" };

console.log(bio);

// The invocation above will return:
// { 0: "Oluwatobi", 1: "Sofela", runs: "codesweetly.com" }