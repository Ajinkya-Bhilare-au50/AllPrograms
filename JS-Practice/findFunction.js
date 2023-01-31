//Find
//returns single instance -(in this case object)
//returns first match, if no match undefined
// great for getting unique value.
// object array
//key value pair
const people = [
  { name: "bob", age: 20, position: "Developer", id: 1 },
  { name: "tob", age: 21, position: "Engineer", id: 2 },
  { name: "pob", age: 22, position: "Teacher", id: 3 },
  { name: "boba", age: 24, position: "Mentor", id: 4 },
  { name: "bobler", age: 25, position: "Programmer", id: 5 },
];
//person is a variable name
const person = people.find(function (person) {
  console.log(person.id);
});
console.log("--------------------");
const travel = people.find(function (travel) {
  console.log(travel.age);
});
console.log("--------------------");
const time = people.find(function (time) {
  return time.id === 3;
});
console.log(time);
console.log("--------------------");

const trial = people.find(function (trial) {
  return trial.name;
});
console.log(trial);
console.log("--------------------");
const names = ["bob", "peter", "susy"];
console.log(
  names.find(function (name) {
    return name === "bob";
  })
);
const person1 = people.find(function (person1) {
  return person1.id == 3;
});
console.log(person1[0]);
