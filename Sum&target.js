// Easy
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
    let result = [];
    let sum;
    for(let i=0; i <=nums.length ;i++){
        sum = nums[i] + nums[i+1];
        if(sum == target){
            result.push(i);
            result.push([i+1]);
        } 
    }
    return result;
};


