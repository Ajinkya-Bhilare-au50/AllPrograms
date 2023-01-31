// Function Expressions in js
// -------------------------------------------------------------------
// A simple function without any expression
function func() {
  console.log("Hello i am a Normal function");
}

func();
// -------------------------------------------------------------------
// A fancy function in js with expression is like shown below
const func_2 = function () {
  console.log("Hello i am a fancy function");
};

func_2();
console.log(func_2);

// ==<1>--------------  Doubt ? --line 19 And Line 25---------------------------------------
let namedFunction = function think() {
  //multiple lines of code here...
  console.log("Sachin Tendulkar ");
};

// ==<2>--------------** Function Expression **---------------------------
let named2Function = function () {
  //some code here...
  console.log("Ms Dhoni ");
};
namedFunction(); // Sachin Tendulkar
namedFunction(); // Sachin Tendulkar
named2Function(); //MS Dhoni

// ==<3>----------------** Arrow Functions ** -----------------------------
let named3Function = () => {
  console.log("Virat Kohli");
};
named3Function(); //virat Kohli

//-------Using Return -------------------------------------------------
let named4Function = function think() {
  //multiple lines of code here...
  return "Sachin Tendulkar scored 145 runs ";
};
b = named4Function();
console.log(b);

//-----------------Doubt?---line 52 and Line 53------------------------------------
function here() {
  // (1) create
  console.log("I love Coding");
}

let funny = here; // (2) copy

funny(); // i love Coding 
here();  // i love Coding 
console.log(here); 
