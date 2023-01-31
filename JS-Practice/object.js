const user = {
  name: "DOM",
  age: 32,
  occupation: "web developer",
};
//method1
for (const entry of Object.entries(user)) {
  console.log(`${entry[0]}=>${entr[1]}`);
}
// method2
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}=>${value}`);
}

for (const key of Object.keys(user)) {
  console.log(`${key}=>${user[key]}`);
}
console.log(Object.values(user));
console.log(Object.keys(user));
