
//Creates Node 
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
//creates LinkedList
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(8);
node1.next = node2

let list = new LinkedList(node1)

function getListSize(list){
    let count = 0; 
    let node = list.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

console.log(getListSize(list));