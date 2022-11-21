// function Vcuboid(l, b, h) {
//   return l * b * h;
// }
// console.log(Vcuboid(2, 4, 6))

function andu(l) {
   return function pandu(b) {
    return function zhandu(h) {
      return (l * b * h);
    }
  };
}
var t = andu(2)(4)(6);
console.log(t);
