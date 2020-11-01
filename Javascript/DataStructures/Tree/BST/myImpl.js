class BSTNode {

    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(data) {

        let newNode = new BSTNode(data);

        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }

        // recursive function call
        insertNode(node, newNode){

            if (newNode.data < node.data) {

                if (node.left == null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);
                }
            } else {

                if (node.right == null) {
                    node.right = nodeNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        }

    }



    remove(data) {

        this.root = removeNode(this.root, data);

        // recursive function call
        removeNode(node, key){

            if (node == null) {
                return null;
            } else if (key < node.data) {
                node.left = this.removeNode(node.left, key);
                return node;
            } else if (key > node.data) {
                node.right = this.removeNode(node.right, key);
                return node;
            } else {

                if (node.left == null && node.right == null) {
                    node = null;
                    return node;
                }

                if (node.left == null) {
                    node = node.right;
                    return node;
                } else if (node.right == null) {
                    node = node.left;
                    return node;
                }

                let aux = this.findMinNode(node.right);
                node.data = aux.data;

                node.right = this.removeNode(node.right, aux.data);
                return node;
            }
        }
    }

    findMinNode(node) {

        if (node.left == null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    findMaxNode(node) {

        if (node.right == null) {
            return node;
        } else {
            return this.findMaxNode(node.right);
        }
    }

    inOrder(node) {

        if (node != null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    preOrder() {

        if (node != null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder() {

        if (node != null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }

    getRootNode() {
        return this.node;
    }

    search(node, data) {

        if (node == null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
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