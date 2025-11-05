class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const newList = new ListNode(2, null);

function mergeTwoSortedList(l1, l2) {
  let newSortedList = new ListNode();
  const savedSortedList = newSortedList;

  while (l1 || l2) {
    if (!l1) {
      newSortedList.next = l2;
      return savedSortedList.next;
    } else if (!l2) {
      newSortedList.next = l1;
      return savedSortedList.next;
    }
    if (l1.val <= l2.val) {
      newSortedList.next = l1;
      l1 = l1.next;
    } else {
      newSortedList.next = l2;
      l2 = l2.next;
    }
    newSortedList = newSortedList.next;
  }
  return savedSortedList.next;
}
const l1 = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 12,
      next: null,
    },
  },
};
const l2 = {
  val: 3,
  next: {
    val: 40,
    next: {
      val: 91,
      next: null,
    },
  },
};
// optimal approach

function mergeTwoSortedList(l1, l2) {
  const start = new ListNode();
  let curr = start;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (!l1) {
    curr.next = l2;
  } else {
    curr.next = l1;
  }
  return curr.next;
}
console.dir(mergeTwoSortedList(l1, l2), { depth: null });
