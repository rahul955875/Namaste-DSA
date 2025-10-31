//my approach

function removeLinkedList(head, val) {
  let prev = null;
  let curr = head;

  while (curr) {
    if (curr.val == val && !prev) {
      head = head.next;
      curr = head;
    } else if (curr.val == val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
}

// new approach

function removeLinkedList2(head, val) {
  const newNode = { val: 0, next: null };
  const sentinal = newNode;
  sentinal.next = head;
  let prev = sentinal;

  while (prev.next) {
    if (prev.next.val == val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinal.next;
  //dont return head because all component is val then prev.next cant be modified.
}
