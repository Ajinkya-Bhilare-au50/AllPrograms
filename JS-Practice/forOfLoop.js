//for of-loops through the values of an iterable object
// string,array,map,set stc -NOT object
//unlike forEach-we can use break,continue

// run in Browser


/* 

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4]. 

*/


function simple(digits) {
  if (!digits || digits.length == 0) return [];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      //998->999  989->990
      digits[i]++;//units place digit is
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  //only special case 999-> 1000
  let thousand = new Array(digits.length).fill(0);
  thousand.unshift(1); //add 1 in head of arr
  return thousand;
}

digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3, 7, 8];

console.log(simple(digits));
