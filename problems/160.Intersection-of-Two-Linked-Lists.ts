// TS
// Runtime: 108 ms, faster than 89.34% of TypeScript online submissions for Intersection of Two Linked Lists.
// Memory Usage: 46.7 MB, less than 54.10% of TypeScript online submissions for Intersection of Two Linked Lists.
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let currA = headA;
  let currB = headB;

  while (currA !== currB) {
    if (currA === currB) return currA;

    if (currA) currA = currA.next;
    else currA = headB;

    if (currB) currB = currB.next;
    else currB = headA;
  }

  return currA;
}

// JS
// Runtime: 96 ms, faster than 98.22% of JavaScript online submissions for Intersection of Two Linked Lists.
// Memory Usage: 46.2 MB, less than 40.41% of JavaScript online submissions for Intersection of Two Linked Lists.
// var getIntersectionNode = function (headA, headB) {
//     let currA = headA;
//     let currB = headB;

//     while (currA !== currB) {
//       if (currA === currB) return currA;

//       if (currA) currA = currA.next;
//       else currA = headB;

//       if (currB) currB = currB.next;
//       else currB = headA;
//     }

//     return currA;
//   };
