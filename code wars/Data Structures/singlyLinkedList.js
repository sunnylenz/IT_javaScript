// defining a Node Class
// a piece of data - val
// a reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        /*
                PUSHING PSEUDOCODE
            1. This function should accept a value
            2. create a new node using the value passed to the function
            3. if theres no head property on the list, set the head and the tail to be the newly created node
            4. otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
            5. increment the length by one
            6. return the linked list 
        */
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        /*
                POPPING PSEUDOCODE
            1. if there are no nodes in the list, return undefined
            2. loop through the list until u reach the tail
            3. set the next property of the 2nd to the last node to be null
            4. set the tail to be the 2nd to last node
            5. Decrement the length of the list by 1
            6. return the value of the node removed 
        */

        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        /*
                SHIFTING PSEUDOCODE
            1. if there are no nodes, return undefined
            2. store the current head property in a variable
            3  set the head property to be the current head's next property
            4. decrement the length by 1
            5. return the value of the node removed
        */

        if (!this.head) {
            return undefined;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        /*
                    UNSHIFT PSEUDOCODE
            1. this function should accept a value
            2. create a new node using the value passed to the function
            3. if there is no head propety on the list,set the head and tail to be the newly created node
            4. otherwise set the newly created nodes next property to be the current head property on the list
            5. set the head property on the list to be that newly created node
            6. increment the length of the list by 1
            7. return the linked list
        */

        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        return this;

    }
}