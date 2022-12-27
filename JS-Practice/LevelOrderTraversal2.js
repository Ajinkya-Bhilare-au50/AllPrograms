class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

/* Class to print Level Order Traversal */
/*
 * Given a binary tree. Print its nodes in level order using array for
 * implementing queue
 */
function printLevelOrder() {
  var queue = [];
  queue.push(root);
  while (queue.length != 0) {
    var tempNode = queue.shift();
    console.log(tempNode.data + " ");

    /* Enqueue left child */
    if (tempNode.left != null) {
      queue.push(tempNode.left);
    }

    /* Enqueue right child */
    if (tempNode.right != null) {
      queue.push(tempNode.right);
    }
  }
}

/* creating a binary tree and entering the nodes */
var root = new Node(18);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(60);
root.left.right = new Node(34);
root.right.right = new Node(65);
root.right.left = new Node(45);
root.left.left.left = new Node(12);
root.left.left.right = new Node(50);
root.left.right.left = new Node(98);
root.left.right.right = new Node(82);
root.right.left.left = new Node(31);
root.right.left.right = new Node(59);
root.right.right.left = new Node(71);
root.right.right.right = new Node(41);
console.log("Level order traversal of binary tree is - ");
printLevelOrder();
