/*
        DOUBLY LINKED LIST
    Basically, all that we do is add a pointer to the previous node and the next node.
    so, each node points in two directions.


*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}


