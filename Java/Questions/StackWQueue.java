import java.util.Queue;

public class StackWQueue {

    static class Stack {

        static Queue<Integer> q1 = new Queue<Integer>();
        static Queue<Integer> q2 = new Queue<Integer>();

        static int curr_size;

        public Stack() {
            curr_size = 0;
        }

        // push costly
        static void push(int x) {

            curr_size++;

            q2.add(x);

            while(!q1.isEmpty()){
                q2.add(q1.peek());
                q1.remove();
            }

            Queue<Integer> temp = q1;
            q1 = q2;
            q2 = temp;
        }

        static int pop() {

            if(q1.isEmpty()){
                System.out.println("Stack is empty");
                return false;
            }

            q1.remove();
            curr_size--;
        }

        static void top() {

        }

    }

    public static void main(String args[]) {

        Stack s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);

        System.out.println("current size: " + s.size());
        System.out.println(s.top());
        s.pop();
        System.out.println(s.top());
        s.pop();
        System.out.println(s.top());

        System.out.println("current size: " + s.size());
    }
}