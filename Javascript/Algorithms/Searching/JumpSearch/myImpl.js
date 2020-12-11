var arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];
 
console.log("Found at position :" + jumpSearch(arrayToSearch, 2));
console.log("Found at position :" + jumpSearch(arrayToSearch, 256));
console.log("Found at position :" + jumpSearch(arrayToSearch, 500));
console.log("Found at position :" + jumpSearch(arrayToSearch, 44444));
 
function jumpSearch(arrayToSearch, valueToSearch){

  if(!arrayToSearch){
    return -1;
  }

  let length = arrayToSearch.length;
  let step = Math.floor(Math.sqrt(length));

  let lowerBound = 0;

  while (arr[Math.min(step, length) - 1] < value) {
    lowerBound = step;
    step += step;
    if (lowerBound >= length) {
      return -1;
    }
  }

  const upperBound = Math.min(step, length);

  while (arr[lowerBound] < value) {
    lowerBound++;
    if (lowerBound === upperBound) {
      return -1;
    }
  }

  if (arr[lowerBound] === value) {
    return lowerBound;
  }
  
  return -1;;

}