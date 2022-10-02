

//callback functions using set timeout

//! program to display a text using setTimeout method
function greet() {
  console.log("Hello world");
}

setTimeout(greet, 3000);
console.log("This message is shown first");

/* 
setTimeout(function () {
  
}, 3000); //Time before execution

 */
