nums = [2, 4, 6, 8, 10];
/* nums.forEach((element,index,array) => {
    // console.log(element);
    // console.log("-------------------------");
    console.log(index);
    //  console.log("-------------------------");
    // console.log(array);
    
}); 

*/

/* nums
  .filter((n) => n > 100)
  .map((n) => n * n)
  .forEach((element) => {
    console.log(element);
  });
// console.log(t);
 */ 
var nums;
var result = 0;
result = nums
  .filter((n) => n > 7)
  .map((n) => n * n)
  .reduce((a, b) => a + b);
console.log(result);
// console.log("%cconsole.log", "color: green;");

