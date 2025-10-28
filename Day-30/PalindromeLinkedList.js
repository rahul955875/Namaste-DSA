function isPalindrome(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let firstLinkedList = head;
  let secondeListList = prev;

  while (secondeListList) {
    if (firstLinkedList.val !== secondeListList.val) return false;
    firstLinkedList = firstLinkedList.next;
    secondeListList = secondeListList.next;
  }
  return true;
}
