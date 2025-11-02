var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let oddList = head;
  const savedNode = head.next;
  let evenList = head.next;

  while (/* oddList && */ oddList.next && /* evenList && */ evenList.next) {
    oddList.next = oddList.next.next;
    evenList.next = evenList.next.next;

    oddList = oddList.next;
    evenList = evenList.next;
  }
  oddList.next = savedNode;
  return head;
};
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
console.dir(oddEvenList(node), { depth: null, colors: true });
