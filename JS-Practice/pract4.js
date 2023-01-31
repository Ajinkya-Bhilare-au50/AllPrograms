/* arr = [45, { name: "ajinkya", data: {
    age: 20,
    surname: "Bhilare",
    hobbies: ["dancing", "singing", "teaching"]
}}];
arr1 = [...arr];
console.log(arr);
console.log(arr1);
 */
/* function ascending(a, b) {
  return a - b;
}
function descending(a, b) {
  return b - a;
}
arr = [45, 78, 47, 89, 103, 7999];
console.log(arr.sort(descending));
 */
const array1 = ["a", "b", "c"];

const check = (arr) => {
    // console.log(arr)
  arr.forEach((l) => {
    // console.log(l);
    switch (l) {
      case (() => {
        if (["a", "e", "i", "o", "u"].includes(l)) return l;
      })():
        console.log("vowel");
        break;

      case (() => {
        if (["b", "c", "d", "f", "g"].includes(l)) return l;
      })():
        console.log("consonent");
        break;
    }
  });
};

check(array1);
