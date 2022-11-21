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
function reverse(head) {
  if (!head || !head.next) {
    return head;
  }
  let tmp = reverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return tmp;
}

insert(45); ///
insert(73);
insert(21);
insert(91);
insert(23);
insert(30);
show();
// t = reverse(head);


