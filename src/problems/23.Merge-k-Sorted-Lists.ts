function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const dummy = new ListNode(0);
  let curr = dummy;

  const items: ListNode[] = [];

  lists.forEach((list) => {
    if (list) {
      items.push(list);
    }
  });

  while (items.length) {
    let min = { val: items[0].val, i: 0 };

    items.forEach((item, i) => {
      if (item.val < min.val) {
        min = { val: item?.val, i };
      }
    });

    const next = items[min.i];
    curr.next = next;
    curr = curr.next;

    if (items[min.i].next !== null) {
      items[min.i] = items[min.i].next!;
    } else {
      items.splice(min.i, 1);
    }
  }

  return dummy.next;
}
