// TS
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let stack: TreeNode[] = [root];
  const res: number[][] = [];
  let i = 0;

  while (stack.length) {
    const newStack: TreeNode[] = [];
    res.push([]);

    for (const node of stack) {
      res[i].push(node.val);
      if (node.left) newStack.push(node.left);
      if (node.right) newStack.push(node.right);
    }

    stack = newStack;
    i++;
  }

  for (let i = 1; i < res.length; i += 2) res[i].reverse();
  return res;
}

// JS
// var zigzagLevelOrder = function (root) {
//   if (!root) return [];
//   let stack = [root];
//   const res = [];
//   let i = 0;

//   while (stack.length) {
//     const newStack = [];
//     res.push([]);

//     for (const node of stack) {
//       res[i].push(node.val);
//       if (node.left) newStack.push(node.left);
//       if (node.right) newStack.push(node.right);
//     }

//     stack = newStack;
//     i++;
//   }

//   for (let i = 1; i < res.length; i += 2) res[i].reverse();
//   return res;
// };
