// key:value

const shirt = {
  size: 32,
  len: 30,
  color: "blue",
  shining: "Pearl",
};

const pant = {
  size: 28,
  len: 35,
  color: "pink",
  shining: "navy blue",
};

const computer = {
  cpu: "1.5ghz",
  motherboard: "intel",
  mouse: "dell",
  keyboard: "zebronics",
  screen: " black transparent",
};
// . is used to call the properties
console.log(shirt.size); //first method
console.log(shirt["size"]); //second method
//
console.log(pant.size);
console.log(pant["size"]);
//print keys of object
console.log(Object.keys(shirt));
console.log(Object.keys(pant));
console.log(Object.keys(computer));
//print values of object
console.log(Object.values(shirt));
console.log(shirt);
console.log(pant);
console.log(computer);

//adding new property/key:value
shirt.button = 10;
console.log(shirt);
pant.chain = "12cm";
console.log(pant);

//deleting element
delete shirt.size;
console.log(shirt);

var person = {
  name: "Pankaj",
  age: 78,
  Education: "mtech",

  height: 5.6,
  weight: 56,
  "work experience": "10 years",
  greet: function () {
    console.log("i am present");
  },
};
console.log(person["height"]);
console.log(person.height);
console.log(person["work experience"]); //bulane ka tarika
console.log(person.greet()); //to call a function inside object
console.log(Object.keys(person));
console.log(person.name);
console.log(Object.keys(person)[0]);
console.log(Object.keys(person)[3]);    //access keys of person object at 1st position
console.log(Object.values(person)[1]); //access values of person object at 1st position
