class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount =0;
        let curCount = 0;
        for (let i=0; i<nums.length; i++) {
            if (nums[i] == 1){
                curCount++
            } else {
                curCount = 0;
            }
            if (curCount > maxCount) {
                maxCount = curCount
            }
        }
        return maxCount
    }
}
