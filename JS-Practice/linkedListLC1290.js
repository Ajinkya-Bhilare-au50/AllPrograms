var head; // Head of the Linked List
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
//adding element to node list
function insert(num) {
  var temp = new Node(num);
  temp.next = head;
  head = temp;
}
// to show elements of Nodelist
function show() {
  var temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
  console.log();
}

var getDecimalValue = function (head) {
  let binaryStr = []; //  <-------Empty Array

  while (head) {
    binaryStr.push(head.data);
    head = head.next;
  }
  //   console.log(binaryStr)
  result = parseInt(binaryStr.join(""), 2);
  resultString = binaryStr.join(" ").toString();
  console.log("Binary input -----> " + resultString);
  return result;
};
// <<<<<<<<INPUT YOUR BINARY NUMBER >>>>>>>>>>>>>>>>
// Inserting elements to LinkedList in Binary format

//ENTER format  Most Significant Bit  TO Least Significant Bit
// 1 0 1
insert(1); /// LSB
insert(1);
insert(0);  ///MSB

console.log("All Present Elements of Linked list are : ");
show();
t = getDecimalValue(head);
console.log("Decimal conversion is " + t);


/* 
-------------Output-------------------------

All Present Elements of Linked list are : 
1 
0
1

Binary input -----> 1 0 1
Decimal conversion is 5
---------------------------------------------
*/