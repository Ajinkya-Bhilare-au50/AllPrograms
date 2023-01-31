// destructuring array & nested array & combine array into single array
// faster and easier way to acces/unpack values from array
let person = ["John", "Sandy", "Sam", ["Mike", "Max"], "Diego", "Paul"];
// empty comma is like skipping array index. I skipped "Sam"
const [a, b, , c, ...d] = person;

let friend = [d, "Tom", "Jerry"];
let newFriend = [...d, "Tom", "Jerry"];

console.log(a); // output: "John"
console.log(b); // output: "Sandy"
console.log(c); // output: [ "Mike", "Max" ]
console.log(d); // output: ["Diego", "Paul"]
console.log(friend); // output: [ [ 'Diego', 'Paul' ], 'Tom', 'Jerry' ]
console.log(newFriend); // output: [ 'Diego', 'Paul', 'Tom', 'Jerry' ]

// destructuring objects
// objects into variable
// objects

const bob = {
  first: "bob",
  last: "sanders",
  city: "shicago",
  siblings: { sister: "jane" },
};
const {first:firstName,last,city}=bob //name changing is allowed by following the syntax
console.log(firstName, last, city);