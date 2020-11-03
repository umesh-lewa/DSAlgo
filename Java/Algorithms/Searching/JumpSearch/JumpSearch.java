public class JumpSearch {
    
    public static void main(String args[]){

        int arr = {1,2,3,4,5,6,7,8}
        int x = 6;
        int r = jumpSearch(arr, x);

        if(r == -1){
            System.out.println("Value not found");
        }else{
            System.out.println("Value found at index :"+r);
        }
    }

    public static void jumpSearch(int arr[],int x) {
     
        int n = arr.length;

        int step = (int)Math.floor(Math.sqrt(n));
        int prev = 0;

        while(arr[Math.min(step,n)] < x){

            prev = step;
            step += (int)Math.floor(Math.sqrt(n));
            
            if(prev >= n){
                return -1;
            }
        }

        while(arr[prev] < x){
            prev++;

            if (prev == Math.min(step, n)){ 
                return -1;
            } 
        }

        if(arr[prev] == x){
            return prev;
        }

        return -1;
    }
}
