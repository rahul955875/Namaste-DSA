function swapPairs(head) {
  let prev = { val: 0, next: null };
  prev.next = head;

  let savePrev = prev;
  let curr = head;
  let next = head.next;

  while (curr && next) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
    curr = prev.next;
    next = curr && curr.next;
  }
  return savePrev.next;
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
