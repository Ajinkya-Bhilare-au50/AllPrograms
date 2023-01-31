function ListNode(val) {
  this.val = val;
  this.next = null;
}



var detectCycle = function (head) {
  let curr = head;
  let seenNodes = [];
  while (curr !== null) {
    if (curr.visited) return curr;
    curr.visited = true;
    curr = curr.next;
  }

  return null;
};
