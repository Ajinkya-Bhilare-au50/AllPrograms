function t1(a) {
  console.log("I am " + a);

  setTimeout(t2, 2000, "Pizza", "Burger");
}

function t2(p, q) {
  console.log("I like " + p + " & " + q);
  setTimeout(t3, 2000, "Australia");
}

function t3(m) {
  console.log("My favorite Destination is " + m);
}

setTimeout(t1, 2000, "Ajinkya");

// function t4(pat) {
//   console.log("I will meet you soon in " + pat);
// }

// setTimeout(() => t1("Aji"), 2000);
// setTimeout(() => t2("food", " pasteries"), 4000);
// setTimeout(() => t3("Australia"), 6000);

// a = [12, 15, 15, 19, 89, 98];
// arr = a.filter((_val, id) => id % 2 == 0);
// console.log(arr);

// a = [6, 8, 10, 12, 14];
// var d = new Date();
// console.log(d.getDay());
