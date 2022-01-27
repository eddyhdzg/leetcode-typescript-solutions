// TS
// Runtime: 92 ms, faster than 72.73% of TypeScript online submissions for Rotate List.
// Memory Usage: 40.7 MB, less than 9.09% of TypeScript online submissions for Rotate List.
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0 || !head || !head.next) return head;

  let slow = head;
  let fast = head;
  let len = 1;

  while (fast.next) {
    fast = fast.next;
    len++;
  }

  k %= len;
  let i = len - k;

  while (i) {
    i--;
    fast.next = slow;
    fast = fast.next;
    slow = slow.next || slow;
    fast.next = null;
  }

  return slow;
}

// JS
// Runtime: 84 ms, faster than 87.87% of JavaScript online submissions for Rotate List.
// Memory Usage: 40.4 MB, less than 7.48% of JavaScript online submissions for Rotate List.
// var rotateRight = function (head, k) {
//   if (k === 0 || !head || !head.next) return head;

//   let slow = head;
//   let fast = head;
//   let len = 1;

//   while (fast.next) {
//     fast = fast.next;
//     len++;
//   }

//   k %= len;
//   let i = len - k;

//   while (i) {
//     i--;
//     fast.next = slow;
//     fast = fast.next;
//     slow = slow.next || slow;
//     fast.next = null;
//   }

//   return slow;
// };
