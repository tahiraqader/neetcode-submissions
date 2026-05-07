class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        let length = s.length;
        let mapS= new Map();
        let mapT= new Map();
        for (let i=0;i<length ; i++){
            if (mapS.has(s[i])){
                mapS.set(s[i],mapS.get(s[i]+1))
            } else {
                mapS.set(s[i],1)
            }
            if (mapT.has(t[i])){
                mapT.set(t[i],mapT.get(t[i]+1))
            } else {
                mapT.set(t[i],1)
            }
        }
        console.log(mapS, mapT)
        if (mapS.size !== mapT.size){
            return false
        } 
        const iterator = mapS.keys();
        return iterator.every(key => mapT.has(key) && mapT.get(key) == mapS.get(key))
        
    }
}
