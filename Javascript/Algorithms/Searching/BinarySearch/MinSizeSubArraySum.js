/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let n = nums.length
    if(n === 0) {
        return n;
    }

    let low = 1, high = n, ans = 0;

    while(low <= high) {

        let mid = parseInt((low + high) / 2);
        
        // try to find a subarray of size mid with sum >= s

        let isPossible = false;
        let currSum = 0;

        for(let i = 0; i < n; i++) {
            currSum += nums[i];

            if( (i - mid) >= 0) {
                currSum -= nums[i - mid];   
            }

            console.log(currSum)

            if(currSum >= s) {
                isPossible = true;
                break;
            }
        }

        console.log("-----------");

        if(isPossible) {
            // you have found an answer, try more for better answer ie. smaller subarray
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};