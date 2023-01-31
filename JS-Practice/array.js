// --------------------Doubt?-------------------------------
/* 
array1 = [45, 65, 78, 89, 97, 76, 89, 56, 77, 420,36];
array2 = [...array1]; //copied original array1 to array2
array3 = [...array1]; //copied original array1 to array3
array4 = [...array1]; //copied original array1 to array4
if (array1 == array2 && array1 == array3 && array1 == array4) {
  console.log(
    "\n" +
      "Yes all these arrays are equal and containing elements " +
      array3 +
      "\n"
  );
}

array1.reverse(); // <-----------------reverse array1
//   Doubt? no operation  was  performed on array2 ,array3,array4
console.log("array1  : " + array1);
console.log("array2  : " + array2);
console.log("array3  : " + array3);
console.log("array4  : " + array4);
 */
// ---------------------------------------------------

// Doubt-2

const cricketer = ["Sachin", "Virat", "Dhoni"];
cricketer.push("Hardik Pandya");
console.log(cricketer);


