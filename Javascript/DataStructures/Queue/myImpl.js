
class Queue{

    constructor(){
        this.items = [];
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        if(this.items.isEmpty){
            console.log("Queue is Empty !");
        }else{
            return this.items.shift();
        }
    }

    front(){
        if(this.items.isEmpty){
            console.log("Queue is Empty !");
        }else{
            return this.items[0];
        }
    }

    // peek() has same functionality as front()
    peek(){
        if(this.items.isEmpty){
            console.log("Queue is Empty !");
        }else{
            return this.items[0];
        }
    }

    isEmpty(){
        return this.items.length == 0;
    }

    static isQueue(obj){
        return obj instanceof Queue;
    }

    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}


let q = new Queue();
q.enqueue(1);
q.enqueue(2);

console.log(q.dequeue());
console.log(q.peek());
console.log(q.printQueue());

console.log(Queue.isQueue(q));
