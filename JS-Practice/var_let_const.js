// var let const
/* 

let,const  are blocked scoped {.......}    ---anything within{}
var -function scoped

define ,update,redefine
const cannot mutate primitive type

*/
//define is allowed in var
var number = 100;
console.log(number);

//update is allowed in var
number = 200;
console.log(number);

// redefine is also allowed in var
var number = "orange";
console.log(number);

let amount = 100;
console.log(amount);
amount = 2000;
console.log(amount);
// let amount="orange"   <----- its illegal to re declare the same variable again---------

const total = 100;
const person = { name: "Pankaj" };
person.name = "john";
person.age = 45;
console.log(person.name);
console.log(person);
person.qualification = "CA by Profession ";
console.log(Object.keys(person));

var pamount = 100;
function greet() {
    //local scope
  var randomq = " some random value ";
  console.log("hello there \n" + pamount + " " + randomq);
}
greet();
