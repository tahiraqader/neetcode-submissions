class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const valSet = new Map();
        for (let i=0;i<nums.length;i++) {
            const diff = target - nums[i];
            if (valSet.has(diff)) {
                return([valSet.get(diff), i])
            } else {
                valSet.set(nums[i], i)
            }
        }
       
    }
}
