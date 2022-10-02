//Arrays with for loop

const names = ["anna", "susy", "bob", "brother"];
const lastName = "shakesblake";
let newArray = [];

//for loop
for (i = 0; i < names.length; i++) {
  console.log(names[i]);
  const tr = `${names[i]} ${lastName}`;
  newArray.push(tr);
}
console.log(newArray);
console.log("hello");
console.log(names);

for (i = 0; i <= 50; i++) {
  console.log("trial error");
}
