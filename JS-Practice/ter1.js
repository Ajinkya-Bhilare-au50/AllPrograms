digits = [1, 2, 3, 4, 5, 9, 9];
function plus(digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++;
      break;
    } else {
      digits[i] = 0;
    }
  }
  if (digits[0] == 0) {/*  */
    //di = [];
    digits.unshift(1);
    return digits;
  }
  return digits;
}
plus(digits);
console.log(digits);
