//reduce function to find maximum in array or to  find sum of numbers in array
arry = [45, 3269, 987, 98, 59, 782, 89, 789, 56, 455, 4000, 50000];
for (const t of arry) {
  console.log(t);
}
let sum = 0;
function findSum() {
  for (let i = 0; i < arry.length; i++) {
    sum = sum + arry[i];
  }
}
findSum();
console.log("our array is : " + arry);
console.log("Addition is : " + sum);

arr = [2, 4, 6, 8];
const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log("Output is : " + output);

const users = [
  { firstName: " akshay ", lastName: " saini ", age: 26 },
  { firstName: " donald ", lastName: " trump ", age: 75 },
  { firstName: " elon ", lastName: " musk ", age: 50 },
  { firstName: " deepika ", lastName: " padukone ", age: 26 },
];
// list of full names
// [ " akshay saini " , " donald trump " ... ]
const out = users.map((m) => m.firstName + " " + m.lastName);
console.log("Output is : " + out);
const put = users.map(function (person) {
  return person.age;
});
console.log("put is : " + put);

const output1 = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {}); // empty object is passed as an argument to another function
console.log(output1);

const output3 = users
  .filter((x) => x.age < 30)
  .map((x) => x.firstName);
console.log(output3);
