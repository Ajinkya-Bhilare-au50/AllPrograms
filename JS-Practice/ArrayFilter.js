arr = [
  45, 7, 8, 1, 3, 5, 7, 11, 61, 79, 47, 48, 98, 78, 76, 99, 9, 0, 46, 76, 44,
  86, 89, 78, 43, 37, 12, 63, 74, 42, 60, 29, 46, 74, 10, 8, 7, 89, 79, 62, 41,
  93,
];
function isPrime(num) {
  for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
  return num > 1;
}
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

function isGreaterThan47(num) {
  if (num > 47) return num;
}

function isLessThan30(num) {
  if (num < 30) return num;
}

console.log(arr.filter(isLessThan30));
