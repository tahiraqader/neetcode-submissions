class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parenthesis =['(','{','[', ']','}',')'];
        const parLength = parenthesis.length
        const sLength = s.length
        const stack = []
        for (let i = 0; i<sLength; i++){
            console.log("stack = ", stack)
            if (s[i] == parenthesis[0] ||
                s[i] == parenthesis[1] ||
                s[i] == parenthesis[2]) {
                    stack.push(s[i])
                }
         else {
                const index1= parenthesis.indexOf(stack[stack.length - 1])
                const index2= parenthesis.length - 1 -index1

                console.log("index1=", index1," index2=", index2, "s[i]", s[i])
                if (s[i] == parenthesis[index2]) {
                    stack.pop();
                }
                else {
                    return false
                }
             }


        }
        if ( stack.length == 0 ) {
            return true
        } else {
        return false 
        }
    }
}
