class Solution {
  reverse(node) {
    let prev = null;
    let curr = node;
    let temp = null;

    while (curr != null) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  }

  addOne(node) {
    //your code here
    let head = this.reverse(node);
    let head2 = new Node(1);

    let newHead = null;
    let temp = null;
    let carry = 0;

    while (head != null || carry) {
      let sum = 0;
      if (head != null) {
        sum += head.data;
        head = head.next;
      }

      if (head2 != null) {
        sum += head2.data;
        head2 = head2.next;
      }

      sum += carry;
      carry = parseInt(sum / 10);

      if (newHead == null) {
        newHead = new Node(sum % 10);
        temp = newHead;
      } else {
        temp.next = new Node(sum % 10);
        temp = temp.next;
      }
    }

    newHead = this.reverse(newHead);

    return newHead;
  }
}
