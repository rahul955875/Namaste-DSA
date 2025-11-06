var rotateRight1 = function (head, k) {
  if (!head || !head.next) return head;
  let curr = head;
  let length = 1;
  while (curr.next) {
    curr = curr.next;
    length++;
  }
  k = k % length;
  if (k == 0) return head;
  curr.next = head;
  let move = head;
  for (let i = 1; i < length - k; i++) {
    move = move.next;
  }
  let saveNewHead = move.next;
  move.next = null;
  return saveNewHead;
};

const rotateRight = (head, k) => {
  if (!head || !head.next || k == 0) return head;
  let curr = head;
  let length = 1;
  while (curr.next) {
    curr = curr.next;
    length++;
  }
  let slow = head;
  let fast = head;
  let count = 0;
  while (fast.next) {
    fast = fast.next;
    if (count >= k % length) {
      slow = slow.next;
    }
    count++;
  }
  fast.next = head;
  let newHead = slow.next;
  slow.next = null;
  return newHead;
};
head = {
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
console.dir(rotateRight(head, 2), { depth: null });
