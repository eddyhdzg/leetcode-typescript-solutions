// Stacks
function reorderList(head: ListNode | null): void {
  const stack: ListNode[] = [];

  while (head) {
    stack.push(head);
    head = head.next;
  }

  while (stack.length >= 3) {
    stack[0].next = stack[stack.length - 1];
    stack[stack.length - 1].next = stack[1];
    stack[stack.length - 2].next = null;

    stack.shift();
    stack.pop();
  }
}

// ListNodes
function reorderList(head: ListNode | null): void {
  while (head?.next?.next) {
    const next = head.next;
    let penult = head.next;
    let last = head.next.next;

    while (last?.next) {
      penult = last;
      last = last.next;
    }

    head.next = last;
    last.next = next;
    penult.next = null;
    head = head.next.next;
  }
}
