public class BinarySearch {

    public static void main(String args[]) {
    
        int arr = {1,2,3,4,5}
        int x = 2;
        int r = binarySearch(arr,x);
        if( r == -1){
            System.out.println("Value not found");
        }else{
            System.out.println("Value found at index :"+r);
        }
    }

    public static int binarySearch(int arr[],int x){

        int left = 0;
        int right = arr.length -1;
        
        while(left <= right){
            int mid = left + (right - left) / 2;

            if(arr[mid] == x){

            }else if(arr[mid] > x){
                right = mid - 1;
            }else if(arr[mid] < x){
                left = mid + 1;
            }

            return -1;
        }
    }
}
