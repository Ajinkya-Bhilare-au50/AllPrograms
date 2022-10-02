// spread operators can be used for arrays or objects

// cloning to prevent mutation.
let numList = [1, 2, 3];
let numListClone = [...numList]; // [1, 2, 3]

// spread operator for destructuring.
let animal = {
  name: "dog",
  color: "brown",
  age: 7,
};
let { age, ...otherProperties } = animal;

// spread operator as rest operator
function sum(x, y, ...rest) {}

// spread operator for merging arrays or objects
let numLists = [...numList1, ...numList2];
let animalWithBreed = {
  ...animal,
  breed: "",
};
