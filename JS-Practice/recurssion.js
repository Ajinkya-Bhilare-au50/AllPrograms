function solve(n) {
  let a = n % 10;
  if (n == 0) return 1;
  return a * solve(n / 10);
}

solve(12345);
//multiply digits using recursion

//string reverse
function solve(str) {
  if (str == "") return "";
  return str[str.length - 1] + solve(str.substr(0, str.length - 1));
}

solve("Hello");