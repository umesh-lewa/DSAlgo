

class Stack{

	constructor(){
		this.items = [];
		this.top = 0;
	}

	push(value){
		this.items.push(value);
		this.pop++;
	}

	pop(value){
		if(this.pop !== 0){
			this.items.pop(value);
		}else{
			console.log("Stack Empty !");
		}
	}

	peek(){
		if(this.top !== 0){
			this.items[this.items.length - 1]
		}else{
			console.log("Stack Empty !");
		}
		
	}

	getLength(){
		return this.top;
	}

	isEmpty(){
		if(this.top == 0){
			return true;
		}else{
			return false;
		}

		/*
		return this.items.isEmpty();
		*/
	}

	static isStack(obj){
		return obj instanceOf Stack;
	}
}

class LinkedListNode{

	constructor(value){
		this.element = value;
		this.next = null;
	}

}

class LinkedList{

	constructor(){
		this.head = null;
		this.size = 0;
	}

	add(value){

		let node = new LinkedListNode(value);

		let currentNode;

		if(this.head == null){
			this.head =node;
		}else{
			currentNode = this.head;

			while(currentNode.next){
				currentNode = currentNode.next;
			}

			currentNode.next = node; 
		}
		this.size++;
	}

	insertAt(value,index){

		if(index > 0 && index > this.size){
			console.log("List index out of bounds");
			return false;
		}else{

			let node = new Node(value);
			let curr, prev;

			curr = this.head;

			if(index == 0){
				node.next = this.head;
				this.head = node;
			}else{

				curr = this.head;
				let i = 0;

				while(i < index){
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

	removeFrom(index){

		if(index > 0 && index > this.size){
			return false;
		}else{
			let curr, prev;
			let i = 0;

			curr = this.head;
			prev = curr;

			if(index == 0){
				this.head = curr.next;
			}else{

				while(i < index){
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

	removeElement(){

		let current = this.head;
		let prev = null;

		while(current != null){

			if(current.element == element){
				if(prev == null){
					this.head = current.next;
				}else{
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

	indexOf(value){
		let count = 0;
		let curr = this.head;

		while(curr.next != null){

			if(curr.element == value){
				return count;
			}

			count++;
			curr = curr.next;
		}

		return -1;
	}

	isEmpty(){
		return this.size == 0;
	}

	getSize(){
		return this.size;
	}

	printList(){

		let curr = this.head;
		let str = "";
		while(curr){
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

class Queue{

	constructor(){
		this.items = [];
	}

	enQueue(value){
		this.items.push(value);
	}

	deQueue(){
		if(this.items.length !== 0){
			return this.items.shift();
		}else{
			console.log("Queue Empty !");
		}
	}

	front(){
		if(this.items.length !== 0){
			return this.items[0];
		}else{
			console.log("Queue Empty !");
		}
	}

	isEmpty(){
		return this.items.length == 0;
	}

	static isQueue(obj){
		return obj instanceOf Queue;
	}

	printQueue(){
		let str = 0;
		for(let i = 0 ; i < this.items.length ; i++){
			str = str + this.items[i] + " ";
		}

		return str;
	}

}


class BSTNode{

	constructor(value){
		this.data = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree{

	constructor(){
		this.root = null;
	}

	insert(data){

		let newNode = new BSTNode(data);

		if(this.root == null){
			this.root = newNode;
		}else{
			this.insertNode(this.root,newNode);
		}

		// recursive function call
		insertNode(node,newNode){
			
			if(newNode.data < node.data){

				if(node.left == null){
					node.left = newNode;
				}else{
					this.insertNode(node.left,newNode);
				}
			}else{

				if(node.right == null){
					node.right = nodeNode;
				}else{
					this.insertNode(node.right,newNode);
				}
			}
		}

	}



	remove(data){

		this.root = removeNode(this.root,data);

		// recursive function call
		removeNode(node,key){

			if(node == null){
				return null;
			}else if(key < node.data){
				node.left = this.removeNode(node.left,key);
				return node;
			}else if(key > node.data){
				node.right = this.removeNode(node.right,key);
				return node;
			}else{

				if(node.left == null && node.right == null){
					node = null;
					return node;
				}

				if(node.left == null){
					node = node.right;
					return node;
				}else if(node.right == null){
					node = node.left;
					return node;
				}

				let aux = this.findMinNode(node.right);
				node.data = aux.data;

				node.right = this.removeNode(node.right,aux.data);
				return node;
			}
		}
	}

	findMinNode(node){

		if(node.left == null){
			return node;
		}else{
			return this.findMinNode(node.left);
		}
	}

	findMaxNode(node){

		if(node.right == null){
			return node;
		}else{
			return this.findMaxNode(node.right);
		}
	}

	inOrder(node){

		if(node != null){
			this.inOrder(node.left);
			console.log(node.data);
			this.inOrder(node.right);
		}
	}

	preOrder(){

		if(node != null){
			console.log(node.data);
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	}

	postOrder(){

		if(node != null){
			this.postOrder(node.left);
			this.postOrder(node.right);
			console.log(node.data);
		}
	}

	getRootNode(){
		return this.node;
	}

	search(node,data){

		if(node == null){
			return null;
		}else if(data < node.data){
			return this.search(node.left,data);
		}else if(data > node.data){
			return this.search(node.right,data);
		}else{
			return node;
		}
	}
}

// BST driver  code
// create an object for the BinarySearchTree 
var BST = new BinarySearchTree(); 
  
// Inserting nodes to the BinarySearchTree 
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 
                          
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17  
  
var root = BST.getRootNode(); 
              
// prints 5 7 9 10 13 15 17 22 25 27 
BST.inorder(root); 
              
// Removing node with no children  
BST.remove(5); 
              
              
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//       \    / 
//        9  17  
              
                          
var root = BST.getRootNode(); 
              
// prints 7 9 10 13 15 17 22 25 27 
BST.inorder(root); 
              
// Removing node with one child  
BST.remove(7); 
              
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      9  13 22  27 
//            / 
//           17  
              
              
var root = BST.getRootNode(); 
  
// prints 9 10 13 15 17 22 25 27 
BST.inorder(root); 
              
// Removing node with two children  
BST.remove(15); 
      
//          17 
//         /  \ 
//        10   25 
//       / \   / \ 
//      9  13 22  27 
  
var root = BST.getRootNode(); 
console.log("inorder traversal"); 
  
// prints 9 10 13 17 22 25 27 
BST.inorder(root); 
              
console.log("postorder traversal"); 
BST.postorder(root); 
console.log("preorder traversal"); 
BST.preorder(root); 