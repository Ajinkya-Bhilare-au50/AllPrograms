/* function likes(Fruits) {
  console.log("I Like " + Fruits[0]);
  dislikes(Fruits);
 
}

function dislikes(Fruits) {
  console.log("I don't like " + Fruits[1]);
   purchase(Fruits);
}

function purchase(Fruits) {
  console.log("I bought " + Fruits[3]);
}
Fruits = ["Mango", "Banana", "Watermelon", "Apples"];
likes(Fruits, dislikes, purchase);

 */
function Gm(Ga, Ge, Gn, a, m) {
  // ajinkya and manish
  console.log("Good Morning " + a + " " + m);
  Ga(Ge, Gn, "Sandeep", "Rohan");
}
function Ga(Ge, Gn, s, r) {
  //sandeep and rohan
  console.log("Good Afternoon " + s + " " + r);
  Ge(Gn, "Pawan", "tanuj");
}
function Ge(Gn, p, t) {
  //pawan and Tanuj
  console.log("Good Evening " + p + " " + t);
  Gn("Jayesh", "Naresh");
}
function Gn(j, n) {
  //Jayesh and Naresh
  console.log("Good Night" + j + " " + n);
}

Gm(Ga, Ge, Gn, "Ajinkya", "Manish");

/* function tryMe(param1, param2) {
  alert(param1 + " and " + param2);
}

function callbackTester(callback, param1, param2) {
  callback(param1, param2);
}

callbackTester(tryMe, "hello", "goodbye");
 */
