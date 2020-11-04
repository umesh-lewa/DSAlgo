public class BinarySearchTree {

    public static class Node {
        int data;
        Node left;
        Node right;
    }

    public Node root;

    public BinarySearchTree() {
        root = null;
    }

    public void insert(int data) {

        Node newNode = new Node(data);

        if (root == null) {
            root = newNode;
            return;
        } else {
            Node current = root;
            Node parent = null;

            while (true) {

                parent = current;

                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = newNode;
                        return;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = newNode;
                        return;
                    }
                }
            }
        }
    }

    public Node minNode(Node root) {

        if (root.left == null) {
            return minNode(root.left);
        } else {
            return root;
        }
    }

    public Node maxNode(Node root) {

        if (root.right == null) {
            return maxNode(root.right);
        } else {
            return root;
        }
    }

    public Node deleteNode(Node node,int value) {

        if(node == null){
            return null;
        }else{

            if(value < node.data){
                node.left = deleteNode(node.left,value);
            } else if(value > node.data){
                node.right = deleteNode(node.right, value);
            }else{

                if(node.left == null && node.right == null){
                    node = null;
                }else if(node.left == null){
                    node = node.right;
                }else if(node.right == null){
                    node = node.left;
                }else{

                    Node temp = minNode(node.right);  
                    node.data = temp.data;
                    node.right = deleteNode(node.right, temp.data);  
                }
            }
            return node;
        }
    }

    // recursive function call
    public void inOrderTraversal(Node node) {

        if (root == null) {
            System.out.println("Tree is empty");
            return;
        } else {

            if (node.left != null) {
                inOrderTraversal(node.left);
            }
            System.out.println(node.data);
            if (node.right != null) {
                inOrderTraversal(node.left);
            }
        }
    }

    public void preOrderTraversal(Node node) {

        if (root == null) {
            System.out.println("Tree isempty");
        } else {

            System.out.println(node.data);
            if (node.left != null) {
                preOrderTraversal(node.left);
            }
            if (node.right != null) {
                preOrderTraversal(node.right);
            }
        }
    }

    public void postOrderTraversal(Node node) {

        if (root == null) {
            System.out.println("Tree is empty");
        } else {

            if (node.left != null) {
                postOrderTraversal(node.left);
            }
            if (node.right != null) {
                postOrderTraversal(node.right);
            }
            System.out.println(node.data);
        }
    }
}

public class myImpl {

    public static void main(String[] args) {

        // BST Driver Code
        BinarySearchTree bt = new BinarySearchTree();
        // Add nodes to the binary tree
        bt.insert(50);
        bt.insert(30);
        bt.insert(70);
        bt.insert(60);
        bt.insert(10);
        bt.insert(90);

        System.out.println("Binary search tree after insertion:");
        // Displays the binary tree
        bt.inorderTraversal(bt.root);

        Node deletedNode = null;
        // Deletes node 90 which has no child
        deletedNode = bt.deleteNode(bt.root, 90);
        System.out.println("\nBinary search tree after deleting node 90:");
        bt.inorderTraversal(bt.root);

        // Deletes node 30 which has one child
        deletedNode = bt.deleteNode(bt.root, 30);
        System.out.println("\nBinary search tree after deleting node 30:");
        bt.inorderTraversal(bt.root);

        // Deletes node 50 which has two children
        deletedNode = bt.deleteNode(bt.root, 50);
        System.out.println("\nBinary search tree after deleting node 50:");
        bt.inorderTraversal(bt.root);
    }

}
