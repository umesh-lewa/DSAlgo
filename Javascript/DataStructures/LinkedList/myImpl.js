
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
            if (Array.isArray(value)){
            return this.fromArray(value);
            }

            return new TypeError(value + ' is not iterable');
        };
        return this;
    }

    append(value) {
        this.size++;
        let newNode = new Node(value);

        if(!this.head){
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

    toArray(useNodes = false){
        let nodes = [];
        let currentNode = this.head;

        while(currentNode){
            nodes.push(useNodes ? currentNode : currentNode.value);
            currentNode= currentNode.next;
        }

        return nodes;
    }

}


let ll = new LinkedList([1,2,3,4]);
console.log(ll.toArray());
console.log(ll.toArray(true));