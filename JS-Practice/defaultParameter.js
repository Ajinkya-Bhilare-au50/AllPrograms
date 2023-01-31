//default parameters,arrow Functions
const john = "john";
const peter = "Peter";
function sayHi(person = "susan") {
  console.log(`hi ${person}`);
}
const sayHello = (person = "BOB") => console.log(`hello ${person}`);
sayHello("Peter");
sayHi("Patel");
