// 26-september-2022
//Object Basics
// access key value pairs
//Access array using for loop
// Given
//objects with key value pair
//dot notation vs bracket notation
const love = 6000;

const obj = {
  key1: 7,
  key2: 12,
};

// add pair
obj["key3"] = 5;
obj.key4 = 9;
obj.d = function () {
  console.log("Doing Nothing");
};
console.log(obj.d());
key_array = Object.keys(obj);
console.log(key_array);
const value2 = Object.values(obj);
console.log(value2);
temp = 45;
console.log(Object.keys(obj));

//adding temp  to obj array
obj.temp = 45;
console.log(obj);

//adding prep to obj array
obj.prep = "maths";
console.log(obj);

//adding id to obj array
obj.id = "AE12345";
console.log(obj);
//accessing the value of id
console.log(obj.prep);
//object array
const mobiles = [
  {
    brand: "Samsung",
    model: "Galaxy Note 9",
  },
  {
    brand: "Google",
    model: "Pixel 3",
  },
  {
    brand: "Apple",
    model: "iPhone X",
  },
];
///loop to print array
mobiles.forEach((mobile) => {
  for (let key in mobile) {
    console.log(`${key}: ${mobile[key]}`);
  }
});

const person = {
  name: "john",
  age: 25,
  married: true,
  siblings: ["anna", "peter"],

  greet: function (name) {
    console.log(`hello,my name is ${name}`);
  },
  sayHello(name) {
    console.log("hello, my name is " + name);
  },
  job: {
    title: "Developer",
    company: {
      name: "coding addict ",
      address: "123 main street",
    },
  },
  love: love,
};
console.log(person.name);
const name1 = person.name;
console.log(person.name);
console.log(name1);
person.city = "Chennai and Mumbai";
console.log(person.city);
// adding new property to an object
person["work Experience"] = 45; //adding work experience to person
console.log(person);
temp = 0;
//delete property
var temp = delete person.age;
console.log(temp);
//   ==================  Nested Objects  ===============================
console.log(person.love);
console.log(person['work Experience']) //display work experience using display property
console.log(person.love);
