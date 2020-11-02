class Stack {
    static final int MAX = 1000;
    int top;
    int a[] = new int[MAX];

    Stack() {
        top = -1;
    }

    boolean push(int x) {
        if (top >= (MAX - 1)) {
            System.out.println("Index out of bound");
            return false;
        } else {
            a[++top] = x;
            return true;
        }
    }

    int pop() {
        if (top < 0) {
            System.out.println("Underflow");
            return 0;
        } else {
            int x = a[top--];
            return x;
        }
    }

    int peek() {
        if (top < 0) {
            System.out.println("Underflow");
            return 0;
        } else {
            int x = a[top];
            return x;
        }
    }

    boolean isEmpty() {

        if(a.length == 0){
            return true;
        }else{
            return false;
        }
    }
}

class myImpl {
    public static void main() {
        Stack s = new Stack();
        s.push(10);
        s.push(20);
        s.push(30);
        System.out.println(s.pop() + " Popped from stack");
    }
}