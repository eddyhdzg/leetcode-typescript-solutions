// JS
// No Extra Memory
var partition = function (head, x) {
  const dummyLess = new ListNode();
  const dummyMore = new ListNode();

  let less = dummyLess;
  let more = dummyMore;

  while (head) {
    if (head.val < x) less = less.next = head;
    else more = more.next = head;
    head = head.next;
  }

  less.next = dummyMore.next;
  more.next = null;
  return dummyLess.next;
};

// JS
// Extra Memory
// var partition = function (head, x) {
//   const dummyLess = new ListNode();
//   const dummyMore = new ListNode();

//   let less = dummyLess;
//   let more = dummyMore;

//   while (head) {
//     if (head.val < x) less = less.next = new ListNode(head.val);
//     else more = more.next = new ListNode(head.val);
//     head = head.next;
//   }

//   less.next = more.next;
//   return dummyLess.next;
// };
