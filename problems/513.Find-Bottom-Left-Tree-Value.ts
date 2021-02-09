// TS
// Runtime: 96 ms, faster than 80.00% of TypeScript online submissions for Find Bottom Left Tree Value.
// Memory Usage: 44.5 MB, less than 40.00% of TypeScript online submissions for Find Bottom Left Tree Value.
function findBottomLeftValue(root: TreeNode | null): number {
  const levels: TreeNode[][] = [];

  let stack = [root];
  let level = 0;

  while (stack.length) {
    levels.push([]);
    const newStack: TreeNode[] = [];

    while (stack.length) {
      const curr = stack.shift()!;

      levels[level].push(curr);
      if (curr.left) newStack.push(curr.left);
      if (curr.right) newStack.push(curr.right);
    }

    stack = newStack;
    level++;
  }

  return levels[levels.length - 1][0].val;
}

// JS
// Runtime: 92 ms, faster than 59.72% of JavaScript online submissions for Find Bottom Left Tree Value.
// Memory Usage: 43 MB, less than 52.78% of JavaScript online submissions for Find Bottom Left Tree Value.
// var findBottomLeftValue = function (root) {
//     const levels = [];

//     let stack = [root];
//     let level = 0;

//     while (stack.length) {
//       levels.push([]);
//       const newStack = [];

//       while (stack.length) {
//         const curr = stack.shift();

//         levels[level].push(curr);
//         if (curr.left) newStack.push(curr.left);
//         if (curr.right) newStack.push(curr.right);
//       }

//       stack = newStack;
//       level++;
//     }

//     return levels[levels.length - 1][0].val;
//   };
