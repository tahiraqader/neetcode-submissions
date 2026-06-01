class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(price) {
        let buy=0;
        let sell = 0
        for (let i=0;i<price.length; i++){
            if (price[buy] > price[i]) {
            
                for (let j=i+1;j<price.length;j++){
                    if ((price[j] -  price[i]) > (price[sell] - price[buy])){
                        sell = j 
                        buy = i
                    }
                }
            } else {
               if ( price[i] > price[sell] ) {
                    sell = i
               }
            }
        }
        return price[sell] - price[buy]
        
    }
}
