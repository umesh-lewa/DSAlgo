public class QueueWStack {
    
    static class Queue{

        static Stack<Integer> s1 = new Stack<Integer>();
        static Stack<Integer> s2 = new Stack<Integer>();
    }

    // enQueue constly
    static void enQueue(int x){

        while(!s1.isEmpty()){
            s2.push(s1.pop());
        }

        s1.push(x);

        while(!s2.isEmpty()){
            s1.push(s2.pop());
        }

    }

    static int deQueue(){

        if(s1.isEmpty()){
            System.out.println("Queue is empty");
            return false;
        }

        int x = s1.peek();
        s1.pop();
        return x;
    }

    // deQueue costly
    static void enQueue1(int x){

        while(){

        }

        while(){

        }

    }

    static void deQueue1(){

    }

    public static void main(String args[]){
        // Driver Code
        Queue q = new Queue();
        q.enQueue(1);
        q.enQueue(2);
        q.enQueue(3);

        System.out.println(q.deQueue());
        System.out.println(q.deQueue());
    }
}
