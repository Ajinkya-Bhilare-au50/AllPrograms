// to calculate size and sum of element in linked list

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  printData() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(8);
let node4 = new ListNode(17);
node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new LinkedList(node1);

function getListSize(list) {
  let count = 0;
  let node = list.head;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
}
list.printData();
console.log("size is " + getListSize(list));
// console.log(list.printData());
function sum(list) {
  let current = list.head;
  var sum1 = 0;
  while (current) {
    sum1 += current.data;
    current = current.next;
  }
  return sum1;
}
/* Function to reverse the linked list */
function reverse(node) {
  var prev = null;
  var current = node;
  var next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

// console.log(reverse(list));
console.log("sum of all numbers is " + sum(list));






