//one go

function removeNthNodeFromEnd(head, n) {
  const sentinel = { val: 0, next: null };
  sentinel.next = head;
  const set = [];
  let curr = head;
  while (curr) {
    set.push(curr);
    curr = curr.next;
  }
  console.log(set);
  const nPos = set.length - n - 1;
  if (nPos >= 0) {
    set[nPos].next = set[nPos].next.next;
  } else {
    sentinel.next = sentinel.next.next;
  }

  return sentinel.next;
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
console.log(removeNthNodeFromEnd(node, 5), "this");

//good approcah
function removeNthFromEnd3(head, n) {
  let sentinel = { val: 0, next: null };
  sentinel.next = head;
  let slow;
  let move = sentinel;
  let count = 0;

  while (move) {
    if (count == n) {
      slow = sentinel;
    } else if (slow) {
      slow = slow.next;
    }
    move = move.next;
    count++;
  }
  slow.next = slow.next.next;
  return sentinel.next;
}
// akshay a p proach

function removeNthFromEnd4(head, n) {
  let sentinel = { val: 0, next: null };
  sentinel.next = head;
  let secondPointer = sentinel;

  for (let i = 0; i < n; i++) {
    secondPointer = secondPointer.next;
  }

  let firstPointer = sentinel;
  while (secondPointer.next) {
    secondPointer = secondPointer.next;
    firstPointer = firstPointer.next;
  }

  firstPointer.next = firstPointer.next.next;
  return sentinel.next;
}
