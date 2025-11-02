function removeDuplicatesFromSortedList(head) {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}
const node = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  },
};
console.log(removeDuplicatesFromSortedList(node));
