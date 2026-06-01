class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        
        const mid = Math.floor(nums.length/2)
        console.log('nums=', nums, ", mid=", mid)
        if (nums.length == 1) {
            console.log("nums[0]", nums[0], ", target=", target)
            if (nums[0] == target) {
                console.log(" ===== return 0")
                return 0;
            } else {
                console.log("==========return -1")
                return -1
            }
        }
        if (target < nums[mid]) {
            return this.search(nums.slice(0, mid), target)
        } else {
            const res = this.search(nums.slice(mid), target ) 
            if (res == -1)
                return -1
            else
                return res + mid
        }
        
    }
        
}
