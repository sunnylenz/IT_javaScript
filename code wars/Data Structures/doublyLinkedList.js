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

    push(val) {
        /*
                PSEUDOCODE
            1. create a new node with the value passed to the function
            2. if the head is null, set the head and tail to be the newly created node 
            3. if not, set the next property on the tail to be that node
            4. set the previous property of the newly created node to be the tail.
            5. set the tail to be the newly created  node
            6. increment the length
            7. return the entire list
        
        */
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push("last item");
console.log(list);


