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

    pop() {
        /*
                 POPPING PSEUDOCODE
            1. if there is no head, return undefined
            2. store the current tail in a variable to return later
            3. if the lentgh is 1, set the head and tail to be null
            4. updte the tail to be the previous node
            5. set the new tails next to null
        */
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.pop());
console.log(list);


