// TS
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Linked List Cycle II.
// Memory Usage: 42.3 MB, less than 42.86% of TypeScript online submissions for Linked List Cycle II.
function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let intersection = detectCycleHelper(head);
  if (!intersection) return null;

  while (head !== intersection) {
    head = head!.next;
    intersection = intersection!.next;
  }

  return head;
}

const detectCycleHelper = (head: ListNode): ListNode | null => {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return slow;
  }

  return null;
};

// JS
// Runtime: 88 ms, faster than 72.19% of JavaScript online submissions for Linked List Cycle II.
// Memory Usage: 41.9 MB, less than 21.43% of JavaScript online submissions for Linked List Cycle II.
// var detectCycle = function (head) {
//   if (!head || !head.next) return null;

//   let intersection = detectCycleHelper(head);
//   if (!intersection) return null;

//   while (head !== intersection) {
//     head = head.next;
//     intersection = intersection.next;
//   }

//   return head;
// };

// const detectCycleHelper = (head) => {
//   let slow = head;
//   let fast = head;

//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) return slow;
//   }

//   return null;
// };
