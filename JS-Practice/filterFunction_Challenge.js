// filter is used to filter elements from array of numbers
// filter odd values
// filter even values
//filter greater than 10
//filter greater than 5
//filter method passes one by one elements to the function
arry = [4, 15, 12, 17, 19, 56, 76, 98, 102, 144, 199, 46, 3, 2, 48];
/* using function definition
function isEven(x){
    return x%2===0;
}
const Even_Nos=arry.filter(isEven);


 */

const Even_Nos = arry.filter((isEven = (x) => x % 2 === 0)); //arrow function for single line code

const GreaterThan100 = arry.filter((isG = (x) => x > 100 ));
console.log(Even_Nos);
console.log(GreaterThan100);


/* 
https://www.youtube.com/watch?v=zdp0zrpKzIE&feature=share&utm_source=EJGixIgBCJiu2KjB4oSJEQ
*/