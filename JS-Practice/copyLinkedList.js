//create a copy of linked list

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
list.addStart(1);
list.addStart(2);
list.addStart(14);
list.addStart(74);
list.addStart(25);
// list.addEnd(3);

// console.log(list.head.value); // 2 (head of list)

var copyRandomList = function (head) {
  let map = new Map();
  let copy = next(head);
  return copy;

  function next(node) {
    if (!node) {
      return null;
    }

    const copyNode = { ...node };
    map.set(node, copyNode);
    copyNode.next = next(node.next);
    copyNode.random = map.get(copyNode.random);
    // console.log("here  " + JSON.stringify(copyNode));
    return copyNode;
  }
};
t=copyRandomList(list.head)
console.log(JSON.stringify(t));
