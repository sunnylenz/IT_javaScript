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

    shift() {
        /*
                    SHIFTING PSEUDOCODE
            1. if length is 0, return undefined
            2. store the current head property in a variable
            3. if the length is one
                a. set the head to be null
                b. set the tail to be null
            4. set the heads prev property to null.
        */
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
    }

    unshift(val) {
        /*
                    UNSHIFTING PSEUDOCODE
            1. create a new node with the value passed to the function
            2. if the length is 0
                a. set the head to be the new node
                b. set tail to be the new node
            3. otherwise
                a. set the prev property on the head of the list to be the new node
                b. set the next property on the new node to be the head property
                c. update the head to be the new node
            4. increment the length
            5. return the list
        */

        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    get(index) {
        /*
                    GET PSEUDOCODE
            1. if the index is less than 0 or greater or equal to length, return null
            2. if the index is less than or equal to half the length of the list
                a. loop through the list starting from the head and loop towards the middle
                b. return the node once its found
            3. if the index is greater than half the length of the list
                a. loop through the list starting fro the tail and loop towards the middle
                b. return the node once its found.
        */

        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            console.log("working from staart");
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }

        } else {
            console.log("working from the end");
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }
    set(index, val) {
        /*
                SET PSEUDOCODE
            1. create a variable which is the result of the get method at the index passed to the function
                a. if the get method returns a valid node, set the value of that node to be the value passed to the function
                b. return true
            2. otherwise, return false
        */
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        /*
               INSERT PSEUDOCODE
           1. if the index is less than zero or greater than or equal to the lengt return false
           2. if the index is 0, unshift
           3. if the index is the same as the length, push
           4. use the get method to acess the index - 1
           5. set the next and prev properties on the correct nodes to link everything together
           6. increment the length
           7. return true
        */
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = nextNode, nextNode.prev = newNode;
        this.length++;
        return true;
    }
}

let list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("Hermione");
list.unshift("sunny lenz");
list.get(2);
console.log(list.set(-10, "Maguire"));
console.log(list);


