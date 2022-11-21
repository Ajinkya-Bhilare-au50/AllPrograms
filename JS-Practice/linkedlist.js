class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //insert at an index
  insertAt(data, index) {
    if (index < 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //node after the index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  //get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  //remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  // clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  //print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      //   console.log(current.next);
      current = current.next;
    }
  }
}

const ll = new linkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(400);
ll.insertLast(475);
// ll.printListData();
ll.insertAt(500, 2);

// ll.getAt(3);
ll.printListData();
