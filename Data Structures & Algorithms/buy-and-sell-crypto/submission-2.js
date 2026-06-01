class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let low = 0;
      let profit = 0;
      for (let i=1; i< prices.length;i++){
        if (prices[i] - prices[low] > profit) {
            profit = prices[i] - prices[low];
        }
        if (prices[i] < prices[low]) {
            low = i;
        }
      }
      return profit
        
    }
}
