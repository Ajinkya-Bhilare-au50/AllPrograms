// problem-1
//SetTimeOut function with  using 3 or more parameters
// call each function with a delay of 2 seconds
fruit = ["apple", "banana", "watermelon", "grapes"];

function fav(fruit, fruit2, veg) {
  console.log("My favourite fruit is " + fruit[0]);
  console.log(fruit2);
  console.log(veg);
}
function dislike(fruit, fruit2) {
  console.log("I dont like " + fruit[2]);
  console.log(fruit2);
}

function bought(fruit, fruit2) {
  console.log("I bought some " + fruit[1]);
  console.log(fruit2);
}

setTimeout(fav, 2000, fruit, "APPLE", "TOMATO");
setTimeout(dislike, 4000, fruit, "BANANA");
setTimeout(bought, 6000, fruit, "GRAPES");
