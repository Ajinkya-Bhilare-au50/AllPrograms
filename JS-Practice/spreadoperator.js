// spread operators can be used for arrays or objects

// cloning to prevent mutation.
let numList1 = [1, 2, 3];
let numListClone = [...numList1]; 
// [1, 2, 3]
numList2=[12,14,13,15,17]

// spread operator for destructuring.
let animal = {
  name: "dog",
  color: "brown",
  age: 7,
}
let { age, ...otherProperties } = animal;

// spread operator as rest operator
function sum(x, y, ...rest) {}

// spread operator for merging arrays or objects
let numList5 = [...numList1, ...numList2];
let animalWithBreed = {
  ...animal,
  breed: "",
};
