// TS
// Runtime: 272 ms, faster than 100.00% of TypeScript online submissions for Even Odd Tree.
// Memory Usage: 74.1 MB, less than 100.00% of TypeScript online submissions for Even Odd Tree.
function isEvenOddTree(root: TreeNode | null): boolean {
  if (!root) return true;
  let level = 0;
  let queue: TreeNode[] = [root];

  while (queue.length) {
    const newQueue: TreeNode[] = [];
    let prev = level ? Infinity : -Infinity;

    for (let node of queue) {
      if (node.val % 2 === level) return false;

      if (level) {
        if (node.val >= prev) return false;
      } else if (node.val <= prev) return false;

      prev = node.val;
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }

    level = 1 - level;
    queue = newQueue;
  }

  return true;
}

// JS
// Runtime: 280 ms, faster than 81.61% of JavaScript online submissions for Even Odd Tree.
// Memory Usage: 74.9 MB, less than 90.80% of JavaScript online submissions for Even Odd Tree.
// var isEvenOddTree = function (root) {
//   if (!root) return true;
//   let level = 0;
//   let queue = [root];

//   while (queue.length) {
//     const newQueue = [];
//     let prev = level ? Infinity : -Infinity;

//     for (let node of queue) {
//       // Checks even or odd
//       if (node.val % 2 === level) return false;

//       // Checks increasing and decreasing
//       if (level) {
//         if (node.val >= prev) return false;
//       } else if (node.val <= prev) return false;

//       prev = node.val;

//       if (node.left) newQueue.push(node.left);
//       if (node.right) newQueue.push(node.right);
//     }

//     level = 1 - level; // Turns 1 into 0 and 0 into 1
//     queue = newQueue;
//   }

//   return true;
// };
