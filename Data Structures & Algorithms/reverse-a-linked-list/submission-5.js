/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let curNode = head;
        if (curNode !== null && curNode.next != null){
            let nextNode = curNode.next
            curNode.next = null
            console.log("nextNode" , nextNode)
            head = nextNode
            while (nextNode != null) {
                console.log("val =", curNode.val)
                let temp = nextNode.next;
                nextNode.next = curNode;
                curNode = nextNode
                nextNode = temp;
                if (nextNode !== null) {
                    head = nextNode
                }
            }
        }
        return head
    }
}
