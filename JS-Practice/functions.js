// a = 15;
// b = 15;
// d = a === b; //date type and value both should match
// console.log("\n", a, "\n", b, "\n", d);
// console.log(b++);
// console.log(b);
// anonynmous function/ unknown

/*

shveta = () => {
  console.log("i love karela and i cook dhoodhi ");
};
//arrow function
travel = () => {
  console.log("i want to travel to Mumbai");
};

//anonymous function
maths = function () {
  console.log("i love Maths ");
};

//anonymous function
chor = function (lavi) {
  console.log("i stole " + lavi);
};
// arrow function
bank = (money, security, lock) => {
  console.log(
    "we have " + money + " rupees with " + security + " " + lock + " lock"
  );
};

marriage = (family, money, bride, groom) => {
  console.log(bride + " weds " + groom);
  console.log("There will be " + family + " members from our family");
  console.log("Total estimate for marriage is " + money + " rupees");
};

shveta(); //calling a function
maths(); // calling function
travel(); //calling a function
chor(45); //calling chor
bank(400000, "A1 level security", "Godrej"); //call function
marriage(500, 100000, "Roshni", "Pankaj");
marriage(350, 300000, "Roshni", "Era latita");

//arrow function --function nahi likneka/
*/

// for loops

idiot = (pandu) => {
  for (i = 1; i <= 20; i++) console.log(i + pandu);
};
idiot(" Bahut Paisa ");

// while loop
let j = 0;

while (j <= 20) {
  console.log(j + " Danger");
  // code
  j++;
}

//do while
k = 0;
do {
  console.log(k + " Heavy Rain ");

  k += 1;
} while (k <= 4);

// break
for (m = 1; m <= 9; m++) {
  console.log("my value is " + m);
  if (m == 45) break;
}
