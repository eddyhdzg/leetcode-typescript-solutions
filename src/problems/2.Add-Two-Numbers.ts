// TS
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let curr = dummy;

  let carry = 0;

  while (l1 && l2) {
    const sum = l1.val + l2.val + carry;
    let newVal = sum % 10;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(newVal);
    l1 = l1.next;
    l2 = l2.next;
    curr = curr.next;
  }

  while (l1) {
    const sum = l1.val + carry;
    let newVal = sum % 10;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(newVal);
    l1 = l1.next;
    curr = curr.next;
  }

  while (l2) {
    const sum = l2.val + carry;
    let newVal = sum % 10;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(newVal);
    l2 = l2.next;
    curr = curr.next;
  }

  if (carry) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
}

// JS
// var addTwoNumbers = function(l1, l2) {
//     const dummy = new ListNode(0);
//     let curr = dummy;

//     let carry = 0;

//     while (l1 && l2) {
//       const sum = l1.val + l2.val + carry;
//       let newVal = sum % 10;
//       carry = Math.floor(sum / 10);

//       curr.next = new ListNode(newVal);
//       l1 = l1.next;
//       l2 = l2.next;
//       curr = curr.next;
//     }

//     while (l1) {
//       const sum = l1.val + carry;
//       let newVal = sum % 10;
//       carry = Math.floor(sum / 10);

//       curr.next = new ListNode(newVal);
//       l1 = l1.next;
//       curr = curr.next;
//     }

//     while (l2) {
//       const sum = l2.val + carry;
//       let newVal = sum % 10;
//       carry = Math.floor(sum / 10);

//       curr.next = new ListNode(newVal);
//       l2 = l2.next;
//       curr = curr.next;
//     }

//     if (carry) {
//       curr.next = new ListNode(carry);
//     }

//     return dummy.next;
//   };
