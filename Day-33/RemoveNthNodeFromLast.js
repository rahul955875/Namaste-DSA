function removeNthFromEnd(head, n) {
  let curr = head;
  let count = 0;
  while (curr) {
    curr = curr.next;
    count++;
  }
  const sentinal = { val: 0, next: null };
  sentinal.next = head;
  let prev = sentinal;

  for (let i = 0; i <= count - n; i++) {
    if (i == count - n) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinal.next;
}
const node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
console.log(removeNthFromEnd(node, 3), "this");
