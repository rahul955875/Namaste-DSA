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
  const map = new Set();
  while (headA) {
    map.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (map.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
};

const insertion = {
  value: 1,
  next: {
    value: 2,
    next: null,
  },
};
const listA = {
  value: "ab",
  next: {
    value: "bc",
    next: insertion,
  },
};
const listB = {
  value: "ba",
  next: insertion,
};
console.log(getIntersectionNode(listA, listB));
