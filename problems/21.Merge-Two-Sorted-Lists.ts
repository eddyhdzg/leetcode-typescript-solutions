function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let curr = dummy;

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

  while (l1) {
    curr.next = l1;
    l1 = l1.next;
    curr = curr.next;
  }

  while (l2) {
    curr.next = l2;
    l2 = l2.next;
    curr = curr.next;
  }

  return dummy.next;
}
