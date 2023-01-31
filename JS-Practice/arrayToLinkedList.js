function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = { value: array[i], next: list };
  return list;
}

console.log(JSON.stringify(arrayToList([10, 20, 1, 19])));
// → {value: 10, rest: {value: 20, rest: null}}

// ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxx----------------------------------
function L(val) {
  this.val = val;
  this.next = null;
}

//We have to develop
/*
L{
    val:1,
    next:{
        val:2,
        next: {
            val:3,
            next: {
                val:4,
                next:null
            }
        }
    }
}
*/

var createL = function createL(a) {
  let node, temp;
  for (let i = a.length - 1; i >= 0; i--) {
    if (!node) node = new L(a[i]);
    else {
      temp = new L(a[i]);
      temp.next = node;
      node = temp;
    }
  }
  return node;
};

t=createL([1, 2, 3, 4]);
// console.log(t.next.next.val);