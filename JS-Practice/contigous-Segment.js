const prompt = require("prompt-sync")();
function processData(s) {
  t1 = s.split("0"); //splits when 0 is seen and returns array
  console.log(t1);
  let a = t1.sort((a, b) => (a < b ? 1 : -1)); //arranging in descending order
  console.log(a);
  t2 = s.split("1"); //splits when 1 is seen and returns array
  console.log(t2);
  let b = t2.sort((a, b) => (a < b ? 1 : -1)); //arranging in descending order
  console.log(b);
  console.log(a[0].length);
  console.log(b[0].length);

  if (a[0].length > b[0].length) console.log("YES");
  else console.log("NO");
}

s = prompt(" Enter a Binary Number ");
processData(s);

