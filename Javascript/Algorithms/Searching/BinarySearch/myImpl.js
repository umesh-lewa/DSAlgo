

function binarySearch(arr,x){

    let left = 0 ;
    let right = arr.length - 1;

    while(left <= right){
        let  mid = Math.floor((left + right)/2);

        if(arr[mid] == x){
            return true;
        }else if(arr[mid] > x){
            right = mid - 1;
        }else if(arr[mid] < x){
            left = mid + 1;
        }
    }

    return false;
}

let arr = [1, 3, 5, 7, 8, 9]; 
let x = 5; 
   
if (binarySearch(arr,x)){ 
    console.log("value found"); 
}else{ 
    console.log("value not found");
}