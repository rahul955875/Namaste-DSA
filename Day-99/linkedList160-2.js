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
  let m = 0;
  let n = 0;
  let saveHeadA = headA;
  let saveHeadB = headB;
  while (headA || headB) {
    if (headA) {
      m++;
      headA = headA.next;
    }
    if (headB) {
      n++;
      headB = headB.next;
    }
  }
  if (n > m) {
    let temp = saveHeadB;
    saveHeadB = saveHeadA;
    saveHeadA = temp;
  }
  const diff = Math.abs(m - n);
  for (let i = 0; i < diff; i++) {
    saveHeadA = saveHeadA.next;
  }
  while (saveHeadB) {
    if (saveHeadA === saveHeadB) return saveHeadA;
    saveHeadB=saveHeadB.next
    saveHeadA=saveHeadA.next
  }
  return null;
};
