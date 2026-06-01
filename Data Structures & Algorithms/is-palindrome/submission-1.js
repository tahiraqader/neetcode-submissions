class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s){ 
    let str = '';
    let regex = /^[0-9a-zA-Z]+$/
    for (let i=0;i<s.length; i++) {
        if (regex.test(s[i])) {
            str=str+s[i].toLowerCase();
        }
    }
    return (str===str.split('').reverse().join(''));
}
}
