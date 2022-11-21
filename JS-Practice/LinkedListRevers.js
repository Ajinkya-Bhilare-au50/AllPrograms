class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var isPalindrome = function (head) {
  let current = head;
  let orig = "";
  let rev = "";
  while (current) {
    orig += current.val;
    rev = current.val + rev;
    current = current.next;
  }

  return orig === rev;
};
