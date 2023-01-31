/* arr = [4, 5, 5, 7, 8, 9, 10, 85, 78];
pandu = [...arr]; //spread operator
pari = [...arr];
arr.reverse();
console.log(arr);
console.log(pandu);
console.log(pari);
a = [1, 5, 45, 78, 143, 420, 36];
b = [4, 56, 79, 78, "Shveta"];
c = [23, 28, 79];
Gaurav = [...a, ...c, "Mattre", "trigo", 78, ...b];
console.log(Gaurav); 

*/
//spread operator
//rest operator-inside function
function fun(...d) {
  console.log(d);
}
b = [4, 5, 6, 7, 89, 12];
pat = [2, ...b, 6];
fun(pat);
