//Advance SetTimeout Function

function one() {
  console.log(1);
  setTimeout(Two, 2000);
}
function Two() {
  console.log(2);
  setTimeout(Three, 3000);
}
function Three() {
  console.log(3);
  setTimeout(Four, 4000);
}
function Four() {
  console.log(4);
  setTimeout(Five, 5000);
}
function Five() {
  console.log(5);
}
setTimeout(one, 1000);




/* function one(one, Two, Three, Four, Five) {
  console.log(one);
  //  one
  setTimeout(() => Two("Two", Three, Four, Five), 2000);
}
function Two(a, Three, Four, Five) {
  console.log(a);
  setTimeout(() => Three("Three", Four, Five), 2000);
}
function Three(b, Four, Five) {
  console.log(b);
  setTimeout(() => Four("Four", Five), 2000);
}
function Four(c, Five) {
  console.log(c);
  setTimeout(() => Five("Five"), 2000);
}
function Five(d) {
  console.log(d);
}
setTimeout(() => one("one", Two, Three, Four, Five), 1000);
 */


/* 

fruit = ["apple", "banana", "watermelon", "grapes"];

function fav(fruit, dislike, bought) {
  console.log("My favourite fruit is " + fruit[0]);
  // setTimeout(dislike, 2000, fruit, bought);
}
function dislike(fruit, bought) {
  console.log("I dont like " + fruit[3]);
  // setTimeout(bought, 2000, fruit);
}

function bought(fruit) {
  console.log("I bought some " + fruit[1]);
}

setTimeout(fav, 2000, fruit, dislike, bought);
 */
