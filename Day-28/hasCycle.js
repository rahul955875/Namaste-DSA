function hasCycle(head) {
  const seenNodes = new Set();
  let curr = head;

  while (curr) {
    if (seenNodes.has(curr)) {
      return true;
    } else {
      seenNodes.add(curr);
    }
    curr = curr.next;
  }
  return false;
}
