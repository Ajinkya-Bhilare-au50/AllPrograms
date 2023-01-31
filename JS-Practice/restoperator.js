//Rest operator ...
// gathrs/collects the item
// arrays
// rest operator can be used to
const fruit = ["apple", "orange", "lemon"];
const [first, ...rest] = fruit;
console.log(first, rest);
//objects
const person = { name: "john", lastname: "smith", job: "developer" };
const { job, ...rest1 } = person;
console.log(job, rest1);
let total = 0;
const getAverage = (name1, ...scores) => {
  console.log(name1, scores);
  for (const sco of scores) {
    total = total + sco;
  }
  console.log(`${name1}'s average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 89, 45, 75, 45);
