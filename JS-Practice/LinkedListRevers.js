//Working code of Palindrome
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a value at beginning of list
  addStart(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  // Add a value at end of list
  addEnd(value) {
    const node = new Node(value);
    let curr = this.head;
    if (curr == null) {
      this.head = node;
      return;
    }

    while (curr !== null && curr.next !== null) {
      curr = curr.next;
    }

    curr.next = node;
  }

  // return the size of the link list
  size() {
    let count = 0;
    const node = this.head;
    if (!node) return count;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  // empty the node
  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.lastNode) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
}

const list = new LinkedList();
// list.clear();
list.addStart(1);
list.addStart(4);
list.addStart(4);
list.addStart(1);

console.log(JSON.stringify(list));

var isPalindrome = function (head) {
  let current = head;
  let orig = "";
  let rev = "";
  while (current) {
    console.log(orig, rev, current.value);
    orig += current.value;
    rev = current.value + rev;
    current = current.next;

    // console.log(rev);
  }

  return orig === rev;
};

console.log(isPalindrome(list.head));
