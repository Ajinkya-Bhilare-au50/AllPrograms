var head;
class Node {
  constructor(data, head = null) {
    this.data = data;
    this.next = head;
  }
}
n1 = new Node(1);
n2 = new Node(4);
n3 = new Node(7);
n4 = new Node(2);
n2.next = n1;
n3.next = n2;
n4.next = n3;
var display = function (op, num) {
  current = num;
  console.log(op);
  while (current != null) {
    console.log(current.data);
    current = current.next;
  }
  head = current;
};
display("original Linked-List is ", n4);

// n4->n3->n2->n1
// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(n4);
var reverseList = function (head) {
  let prev = null,
    next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
rev = reverseList(n4);
display("reverse Linked-List is ", rev);


////
var isPalindrome = function (head) {
  var current = head;
  console.log("here" + JSON.stringify(head));
  var origi = "";
  var revi = "";
  console.log("current" + JSON.stringify(current));
  while (current) {
    origi += current.val;
    revi = current.val + revi;
    current = current.next;
  }
  console.log(origi);
  console.log(rev);
  return origi === revi;
};

palindrome = isPalindrome(n4);
console.log(palindrome)