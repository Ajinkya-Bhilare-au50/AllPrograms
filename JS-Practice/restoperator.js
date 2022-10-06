//Rest operator ...
// gathrs/collects the item
// arrays
const fruit = ["apple", "orange", "lemon"];
const [first, ...rest] = fruit;
console.log(first, rest);
//objects
const person = { name: "john", lastname: "smith", job: "developer" };
const { job } = person;
console.log(job);
