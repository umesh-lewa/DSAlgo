class LinearSearch{

    public private static void main(String srgs[]) {

        int arr[] = { 2, 3, 4, 10, 40 };  
        int x = 10; 
      
        int result = linearSearch(arr, x); 
        if(result == -1) {
            System.out.print("Value found"); 
        }else{
            System.out.print("Value found at index " + result); 
        }
    }

    public static int linearSearch(int arr[],int x){

        for(int i = 0; i < arr.length ; i++){
            if(arr[i] == x){
                return i;
            }
        }
        return -1;
    }
}