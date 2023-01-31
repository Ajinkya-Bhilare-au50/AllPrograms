//this
//point to object which is in the left of dot
const john = {
  firstName: "john",
  lastName: "anderson",
  fullName: function () {
    console.log("My full name is John Anderson");
  },
};
const bob = {
  firstName: "bob",
  lastName: "sandders",
  fullName: function () {
    console.log("My full name is bob sanders");
  },
};
john.fullName();
bob.fullName();

/* 
In Reg Functions (not arrow) "this"
determined by "how"! a function is invoked (left of.)
default to global window 
arrow fuctions-pump the breaks

this keyword always points to window object
global window object
*/

function showThis() {
  console.log(this);
}
const johny = {
  name: "john",
  showThis: showThis,
};
const bobo = {
  name: "bobo",
  showThis: showThis,
};
john.showThis();
bobo.showThis();
//this point to the object who is invoking it to the left of dot
showThis();
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", showThis);
btn2.addEventListener("click", showThis);
btn2.addEventListener("click", function () {
  showThis();
});
