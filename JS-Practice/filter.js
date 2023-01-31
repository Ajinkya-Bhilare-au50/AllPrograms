var words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "hie",
];

// method 1-with anonymous function
const result = words.filter(function (t) {
  return t.length < 4;
});

console.log(result);

// method 2 with arrow function
const pandu = words.filter((word) => word.length > 6);
// (word) => word.length > 6
console.log(pandu);

// ---------------------------------------------------------------
const randomNumbers = [4, 11, 42, 14, 39, 100];
const filteredArray = randomNumbers.filter((n) => {
  return n > 5;
});
console.log(filteredArray);

/* 
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
 */

// array filter from objects
arry = {
  name: "Ajinkya",
  standard: 10,
  RollNo: 1230,
  division: A,
  FavouriteSubject: "Physics",
},
{
  name: "Aanish",
  standard: 11,
  RollNo: 1230,
  division: A,
  FavouriteSubject: "Physics",
},
{
  name: "Patel",
  standard: 9,
  RollNo: 1250,
  division: A,
  FavouriteSubject: "Physics",
},
{
  name: "Riya",
  standard: 7,
  RollNo: 1200,
  division: A,
  FavouriteSubject: "Physics",
},
{
  name: "Anuj",
  standard: "10th",
  RollNo: 1241,
  division: A,
  FavouriteSubject: "Physics",
},
{
  name: "Tejas",
  standard: "10th",
  RollNo: 1231,
  division: A,
  FavouriteSubject: "Physics",
};