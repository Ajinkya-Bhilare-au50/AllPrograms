/* Linked list Node*/
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
var head; // head of list

/* Inserts a new Node at front of the list. */
function insert(new_data) {
  /*
   * 1 & 2: Allocate the Node & Put in the data
   */
  var new_node = new Node(new_data);

  /* 3. Make next of new Node as head */
  new_node.next = head;

  /* 4. Move the head to point to new Node */
  head = new_node;
}

insert(45);
insert(4);
insert(5);
insert(6);
insert(8);
insert(99);

//iterative approach
function countingNodes(head) {
  size = 0;
  current = head;
  while (current != null) {
    size++;
    current = current.next;
  }
  console.log(size);
}
countingNodes(head);

//recursive approach
function countingNodesR(node) {
  // Base condition
  if (node == null) return 0;
  // Count is this node plus rest of the list
  return 1 + countingNodesR(node.next);
}

console.log("Count using recursive approach " + countingNodesR(head));
