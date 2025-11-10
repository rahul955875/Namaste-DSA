function swapPairs(head) {
  if (!head || !head.next) return head;
  const left = head;
  const right = head.next;
  const rightHalf = swapPairs(right.next);
  left.next = rightHalf;
  right.next = left;

  return right;
}

head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

console.dir(swapPairs(head), { depth: null });
