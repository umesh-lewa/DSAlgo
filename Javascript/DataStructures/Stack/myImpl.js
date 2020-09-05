class Stack{

    constructor(){
        this.items = [];
        this.top = 0;
    }

    push(value){
        this.items.push(value);
        this.top++;
    }

    pop(){
        if(this.top != 0){
            return this.items.pop();
            this.top--;
        }else{
            console.log("Stack is Empty !");
        }   
    }

    peek(){
        if (this.top !== 0) {
            return this.items[this.items.length - 1]
        }else{
            console.log("Stack is Empty !");
        }
    }

    getLength(){
        return this.items.length;
        return this.top;
    }

    isEmpty(){
        return this.items.isEmpty();
        return this.top === 0
    }

    static isStack(obj){
        return obj instanceof Stack;
    }
}


let s = new Stack();
s.push(1);
s.push(2);
console.log(s.pop());
console.log(s.peek());

if(s.isEmpty()){
    console.log("Stack is Empty !");
}else{
    console.log("Stack is not Empty");
}

console.log(Stack.isStack(s));
