function L(val) {
  this.val = val;
  this.next = null;
}
var createL = function (a) {
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

t = createL([1, 2, 3, 4]);
// console.log(JSON.stringify(t));

var rotateRight = function (head, k) {
  let r1 = head;

  // count length
  let len = 0;
  while (r1) {
    len += 1;
    // create cycle
    if (!r1.next) {
      r1.next = head;
      break;
    }
    r1 = r1.next;
  }

  // get movement & move
  let movement = len - (k % len); // important!! not just k % len
  let start = head;
  let end;
  while (movement > 0) {
    end = start;
    start = start.next;
    movement -= 1;
  }

  // break cycle after movement end
  if (end) {
    end.next = null;
    }
    console.log("start");
  console.log(start);
  return start;
};
RR = rotateRight(t, 2);
console.log(JSON.stringify(RR));
