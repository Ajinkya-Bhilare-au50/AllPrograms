function calculateLargestPrime(num) {
  while (num % 2 === 0) {
    num = num / 2;
  }

  if (num === 1) {
    return 2;
  }

  let temp = 3;
  for (var i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      num = num / i;
      temp = i;
    }
  }
  if (num > 2) {
    return num;
  }
  return temp;
}
t = calculateLargestPrime(16);
console.log(t);
// 1,5,25
