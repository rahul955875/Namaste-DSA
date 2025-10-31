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

//new approach just samall change

function removeNthNodeFromEnd2(head, n) {
  const sentinel = { val: 0, next: null };
  sentinel.next = head;

  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  let prev = sentinel;
  let prevPos = length - n;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
}
