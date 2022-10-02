//Accessing  using Map, Reduce and Filter
//Map is for transformation
//filter is to filter out object arrays

const B = [
  { name: "Ajinkya", age: 20, position: "developer" },
  { name: "Amit ", age: 25, position: "Teacher" },
  { name: "Ajinkya", age: 20, position: "developer" },
];
// above array has three items with different properties

// r = B.map((t) => t.position);
// console.log(r);
// m = B.filter((p) => p.age > 20);
// console.log(m);

// B.forEach(sor);              --method1

B.forEach(function (t1) {
  console.log(t1.name.toUpperCase());
});
// directly pass Anonymous function without actually naming the function
//Do not invoke these functions
// anonymous function is a function with parameter to access the functionalities in array

const arr = B.map(function (re) {
  console.log(re);
  //   return "hello world "        <-----here we can return hello world in array
});

//with B.map we pass anonymous function and 're' as parameter to access
// alternatively we can directly pass arrow functions inside the map

// x1 is a parameter used to pass along the anonymous function
const rp = B.map(function (x1) {
  return x1.age + 5;
});
console.log(rp);

const newPeople = B.map(function (temp) {
  return { EmployeeName: temp.name, rollno: temp.age, caste: temp.position };
});

console.log(newPeople);
//changing the attributes of objects

const names = B.map(function (rt) {
  return rt.name;
});

const developers = B.filter(function (k) {
  return k.age > 20;
});
console.log(developers);
// shift+ctrl+p  --------->to open command pallete