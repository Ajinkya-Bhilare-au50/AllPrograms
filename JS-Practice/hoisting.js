// scope
/* 
1.global
2.functional
3.block
*/
// hoisting-all functions and variables and classes are moved to the top of their scope before execution


let a = 45; //global
function patel() {
  //functional scope
  let b = 46;
  console.log(b);
  //---------------------------------(1)
  for (i = 0; i <= 10; i++) {
    d = 50;
    console.log(d);
    //block scope...
  }
  //----------------------------------(2)
  if (b == 46) {
    console.log("Shveta");
  }
}
patel();
patel();