class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    let currentNode = this.root;
    this.count++;
    const traverseTree = (node) => {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
        } else {
          currentNode = currentNode.right;
          traverseTree(currentNode);
        }
      }
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
        } else {
          currentNode = currentNode.left;
          traverseTree(currentNode);
        }
      }
    };

    traverseTree(currentNode);
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }

      if (value > currentNode.value) {
        currentNode.right;
      }
      if (value < currentNode.value) {
        currentNode.left;
      }
    }

    return false;
  }

  InOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return result;
  }

  PreOrder() {
    let result = [];

    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  PostOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      return result;
    };

    traverse(this.root);
    return result;
  }

  Bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}
