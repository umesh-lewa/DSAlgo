
class Queue{

    private int arr[];
    private int capacity;
    private int front;
    private int rear;
    private int count;

    Queue(int size){
        arr = new int[size];
        capacity = size;
        front = 0;
        rear = -1;
        count = 0;
    }

    public void enQueue(int item){

        if(isFull()){
            System.out.println("Overflow !");
        }

        rear = (rear + 1) % capacity;
        arr[rear] = item;
        count++;
    }

    public void deQueue(){

        if(isEmpty()){
            System.out.println("Undeflow !");
            return;
        }

        front = (front + 1) % capacity;
        count--;
    }

    public int peek(){

        if(isEmpty()){
            System.out.println("Underflow !");
        }

        return arr[front];
    }

    public int size(){

        return count;
    }

    public boolean isEmpty(){
        return (size() == 0);
    }

    public boolean isFull(){
        return (size() == capacity);
    }
}

public class myImpl {
    
    public static void main (String[] args)
    {
        // Driver code
        // create a queue of capacity 5
        Queue q = new Queue(5);
 
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        
        System.out.println("Front element is: " + q.peek());
        q.dequeue();
        System.out.println("Front element is: " + q.peek());
 
        System.out.println("Queue size is " + q.size());
 
        q.dequeue();
        q.dequeue();
        
        if (q.isEmpty())
            System.out.println("Queue Is Empty");
        else
            System.out.println("Queue Is Not Empty");
    }

}
