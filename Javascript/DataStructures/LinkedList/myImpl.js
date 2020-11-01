// Impl 1
class Node {

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor(value) {
        this.size = 0;
        this.head = null;
        this.tail = null;

        if (value) {
            if (Array.isArray(value)) {
                return this.fromArray(value);
            }

            return new TypeError(value + ' is not iterable');
        };
        return this;
    }

    append(value) {
        this.size++;
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    fromArray(values) {
        values.forEach(value => this.append(value));

        return this;
    }

    toArray(useNodes = false) {
        let nodes = [];
        let currentNode = this.head;

        while (currentNode) {
            nodes.push(useNodes ? currentNode : currentNode.value);
            currentNode = currentNode.next;
        }

        return nodes;
    }

}


let ll = new LinkedList([1, 2, 3, 4]);
console.log(ll.toArray());
console.log(ll.toArray(true));


// Impl 2

class LinkedListNode{

    constructor(value){
        this.element = value;
        this.next = null;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {

        let node = new LinkedListNode(value);

        let currentNode;

        if (this.head == null) {
            this.head = node;
        } else {
            currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        this.size++;
    }

    insertAt(value, index) {

        if (index > 0 && index > this.size) {
            console.log("List index out of bounds");
            return false;
        } else {

            let node = new Node(value);
            let curr, prev;

            curr = this.head;

            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {

                curr = this.head;
                let i = 0;

                while (i < index) {
                    i++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }

            this.size++;
        }
    }

    removeFrom(index) {

        if (index > 0 && index > this.size) {
            return false;
        } else {
            let curr, prev;
            let i = 0;

            curr = this.head;
            prev = curr;

            if (index == 0) {
                this.head = curr.next;
            } else {

                while (i < index) {
                    i++;
                    prev = curr;
                    curr = curr.next;
                }

                pre.next = curr.next;
            }
            this.size--;

            return curr.element;
        }

    }

    removeElement() {

        let current = this.head;
        let prev = null;

        while (current != null) {

            if (current.element == element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }

        return -1;
    }

    indexOf(value) {
        let count = 0;
        let curr = this.head;

        while (curr.next != null) {

            if (curr.element == value) {
                return count;
            }

            count++;
            curr = curr.next;
        }

        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    getSize() {
        return this.size;
    }

    printList() {

        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + "";
            curr = curr.next;
        }

        console.log(str);
    }
}


// LinkedList Driver code

// creating an object for the 
// Linkedlist class 
var ll = new LinkedList();

// testing isEmpty on an empty list 
// returns true 
console.log(ll.isEmpty());

// adding element to the list 
ll.add(10);

// prints 10 
ll.printList();

// returns 1 
console.log(ll.size_of_list());

// adding more elements to the list 
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50 
ll.printList();

// prints 50 from the list 
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40 
ll.printList();

// returns 3 
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position 
// ll contains 10 20 60 30 40 
ll.insertAt(60, 2);

ll.printList();

// returns false 
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list 
console.log(ll.removeFrom(3));

// prints 10 20 60 40 
ll.printList(); 
