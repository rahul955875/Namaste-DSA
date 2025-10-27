function hasCycle(head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}
const head = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

head.next.next = head;
console.log(hasCycle(head));
