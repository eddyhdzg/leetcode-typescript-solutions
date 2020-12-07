// TS
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Binary Tree Tilt.
// Memory Usage: 44.4 MB, less than 75.00% of TypeScript online submissions for Binary Tree Tilt.
function findTilt(root: TreeNode | null): number {
  let res = 0;
  const traverse = (node: TreeNode | null): number => {
    if (!node) return 0;
    const left = traverse(node.left);
    const right = traverse(node.right);
    res += Math.abs(left - right);

    return node.val + left + right;
  };

  traverse(root);

  return res;
}

// JS
// Runtime: 96 ms, faster than 45.85% of JavaScript online submissions for Binary Tree Tilt.
// Memory Usage: 43.6 MB, less than 33.79% of JavaScript online submissions for Binary Tree Tilt.
// var findTilt = function (root) {
//   let res = 0;
//   const traverse = (node) => {
//     if (!node) return 0;
//     const left = traverse(node.left);
//     const right = traverse(node.right);
//     res += Math.abs(left - right);

//     return node.val + left + right;
//   };

//   traverse(root);

//   return res;
// };
