// object1 with key value pairs
//call ,apply,bind
let person1 = {
  firstname: "Ajay",
  lastname: "Nagar",
  age: 45,
};
let greet = function (hometown, state) {
  console.log("i am " + this.firstname + " " + this.lastname);
  console.log("i stay in " + hometown + " i am planning for " + state);
};
console.log(greet.call(person1));

let person2 = {
  firstname: "Sachin",
  lastname: "Tendulkar",
  age: 45,
};

// console.log(person1.greet());   <------call if the method is inside object
// console.log(person2.greet());   <------call if the method is inside object

console.log(greet.call(person2, "Maharastra", "Kerala"));
// // greet.call(objectname,parameter1,parameter2)

// //in apply method array is passed as an argument list
console.log(greet.apply(person2, ["Maharastra", "Kerala"]));

//bind method duplicates the copy method with object
let pat = greet.bind(person2, "Maharastra", "Kerala");
console.log(pat); //it will return a function which can be invoked later
console.log(pat());
