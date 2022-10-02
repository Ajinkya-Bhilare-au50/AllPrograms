//blue print
//Factory fuctions and constructor fuctions
//factory functions
const john = {
  firstname: "john",
  lastname: "anderson",
  fullname: function () {
    console.log(`my full name is ${this.firstname}${this.lastname}`);
  },
};
const bob = {
  firstname: "peter",
  lastname: "sander",
  fullname: function () {
    console.log(`my full name is ${this.firstname}${this.lastname}`);
  },
};
//this refers to the object left of dot who is invoking
// factory functions in the following way
//function returning objects

//constructor Functions
//new -create new object,points to it , omit return
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastName = lastname;
  this.fullname = function () {
    console.log(
      `My full name is ${this.firstname} ${this.lastName}and i love React`
    );
  };
}
//creating object joh with new keyword
const joh = new Person("john", "anderson");
joh.fullname(); //invoking fullname function using constructor.
function createPerson(firstname, lastname) {
  return {
    firstname: firstname,
    lastname: lastname,
    fullname: function () {
      console.log(
        `my full name is ${this.firstname} ${this.lastname} and I love JS`
      );
    },
  };
}
const johny = createPerson("bob", "pandya");
johny.fullname();
const boby = createPerson("javed", "Parikh");
boby.fullname();
const boboo = createPerson("jim", "Parikhar");
boboo.fullname();
//all Objects in javascript have acesss to constructor property tha returns a
// built in constructor functions
// arrays and functions are objects in javascript
const hard = new Person("joy", "sample");
console.log(hard.constructor);
const b1 = {};
console.log(b1.constructor);
const list = [];
console.log(list.constructor);
const sayHi = function () {};
console.log(sayHi.constructor);

const susi = new john.constructor("susy", "carpet");
susi.fullname();
