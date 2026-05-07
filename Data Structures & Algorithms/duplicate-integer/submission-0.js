class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mySet = new Set();
        for (let num of nums){
           if (num in mySet) {
            return true;
           } else {
                mySet.add(num)
           }
           
        }
        console.log('mySet=',mySet)
        return (nums.length != mySet.size)
    }
}
