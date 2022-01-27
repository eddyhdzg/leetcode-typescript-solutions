// JS
// Runtime: 80 ms, faster than 95.38% of JavaScript online submissions for Remove Duplicates from Sorted List II.
// Memory Usage: 40.3 MB, less than 51.73% of JavaScript online submissions for Remove Duplicates from Sorted List II.
var deleteDuplicates = function (head) {
  const dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;
  let curr = head;

  while (curr?.next) {
    if (curr.val === curr.next.val) {
      const val = curr.val;

      while (curr?.val === val) {
        curr = curr.next;
      }

      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummy.next;
};

// TS
// Runtime: 88 ms, faster than 72.73% of TypeScript online submissions for Remove Duplicates from Sorted List II.
// Memory Usage: 40.8 MB, less than 36.36% of TypeScript online submissions for Remove Duplicates from Sorted List II.

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;
  let curr = head;

  while (curr?.next) {
    if (curr.val === curr.next.val) {
      const val = curr.val;

      while (curr?.val === val) {
        curr = curr.next;
      }

      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummy.next;
}
