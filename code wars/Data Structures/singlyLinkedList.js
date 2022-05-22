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

    get(index) {
        /*
                    GET : a function for retrieving a node by its position in the linked list
                    PSEUDOCODE
            1. this function should accept an index
            2. if the index is less than zero or greater than equal to the length of the list, return null
            3. loop through the list until you rech the index and return the node at that specific index
        */
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        /*
                SET : set is a function that will accept two things, a position or an index and a value to update the item at that index too
                    its changing the value of a node based on  its position in the linked list

                    SET PSEUDOCODE
            1. THIS FUNCTION should accept a value and an index
            2. Use your get function to find the specific node
            3. if the node is not found , return false
            4. if the node is found , set the value of that node to be the value passed to the function and return true
        */

        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        /*
                    INSERT
        adding a node to the linked list at a specific position.
        its a sort of like set , in that it takes two pieces of data, an index and a value.
        however, instead of updating an existing node,it inserts a new node at whatever position we specify
                    INSERT PSEUDOCODE
        1. IF THE index is less than zero or greater than the length, return false
        2.  if the index is same as the length, push a new node to the end of the list
        3. if the index is 0, unshift a new node to the start of the list
        4. otherwise, using get method, aces t e node at the index - 1
        5. set the next property on that node to be the new node 
        6. set the next property on the new node to be the previous next
        7. increment length
        8. return true
        */
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;

    }
}

