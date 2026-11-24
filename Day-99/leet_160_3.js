/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pa = headA;
  let pb = headB;
  let paPass = false;
  let pbPass = false;
  while (pa || pb) {
    if (pa === pb) return pa;
    if (pa === null && !paPass) {
      pa = headB;
      paPass = true;
    } else {
      pa = pa.next;
    }
    if (pb === null && !pbPass) {
      pb = headA;
      pbPass = true;
    } else {
      pb = pb.next;
    }
  }
  return null;
};
