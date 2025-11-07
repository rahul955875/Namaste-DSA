var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let even = head.next;
  let odd = head;
  let saveEven = even;
  let saveOdd = odd;

  while (even && even.next) {
    let saveNext = even.next;
    even.next = even.next.next;
    odd.next = saveNext;
    odd = odd.next;
    even = even.next;
  }
  odd.next = null;

  let curr = { val: 0, next: null };
  let saveCurr = curr;
  let flag = true;

  while (saveEven && saveOdd) {
    if (!flag) {
      curr.next = saveOdd;
      saveOdd = saveOdd.next;
    } else {
      curr.next = saveEven;
      saveEven = saveEven.next;
    }
    curr = curr.next;
    flag = !flag;
  }
  curr.next = saveEven || saveOdd;
  return saveCurr.next;
};

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
