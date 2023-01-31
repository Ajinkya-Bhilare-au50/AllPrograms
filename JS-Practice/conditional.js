//conditional ------  <,>,<=,>=,===,!=

// var fg = true && true;
// console.log(fg); //output true

// var pg = 3 && 0;
// console.log(pg); //output
///
a1 = true && true; // t && t returns true
console.log(a1);
a2 = true && false; // t && f returns false
a3 = false && true; // f && t returns false
a4 = false && 3 === 4; // f && f returns false
a5 = "Cat" && "Dog"; // t && t returns "Dog"
a6 = false && "Cat"; // f && t returns false
a7 = "Cat" && false; // t && f returns false
a8 = "" && false; // f && f returns ""
a9 = false && ""; // f && f returns false
// --------------------------------------------
a10 = 22 && 14; //doubt-----returns 14
console.log("a10="+ a10);
a11 = 60 && 45;
 //doubt-----returns 45
 console.log("a11=" + a11);
a12 = 100 || 123; //doubt----returns 100
console.log("a12=" + a12);
a13 = 147 || 16; //doubt-----returns 147
a14 = "Ajinkya" && "Coding"; //----returns Coding
a15 = "Ajinkya" || "Coding"; //----returns Ajinkya

// console.log("a10= " + a10);
// console.log("a11= " + a11);
// console.log("a12= " + a12);
// console.log("a13= " + a13);
console.log("a14= " + a14);
console.log("a15= " + a15);

console.log("Line 34 :" + true || (false && false)); //Doubt ---returns true
console.log("Line 35 :" + (true && (false || false))); //----returns false
console.log("Line 36 :" + (2 === 3) || (4 < 0 && 1 === 1)); // ----returns false
