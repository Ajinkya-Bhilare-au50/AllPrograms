//Spread Operator..
//Allows an iterable to spread/Expand individually inside receiver
// split into single items and copy them
//ES2018-ES8

const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago" };
console.log(newPerson);
const numbers = [23, 45, 66, 88, 2345];
console.log(Math.max(...numbers));
