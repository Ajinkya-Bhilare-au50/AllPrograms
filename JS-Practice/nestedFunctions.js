// Function parentFun(){//function definition
// {
//     Function childFun1()//function definition
//     {
//         Function childFun2()//function definition
//         {
//         //code
//         }
//     childFun2(); //function calling
//     }
//     childFun1();//function calling
//     }
// parentFun();//function calling
function parent() {
  console.log("i am parent");
  return function train() {
    console.log("I am child 1");
  };

  //   function child2() {
  //     console.log("I am child 2");
  //   }

  //   function child3() {
  //     console.log("I am child 3");
  //   }
}
t = parent(); // simply calling train function
t(); //calling train function
// console.log(t);
//Currying:
// It is a technique in functional programming, transformation of the
// function of multiple arguments into several functions of a single
// argument in sequence. It is also called nested function is ecmascript

//Without currying
function calculateVolume(length, breadth, height) {
  return length * breadth * height;
}
//With Currying
function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}
volume(4)(6)(3); // 72