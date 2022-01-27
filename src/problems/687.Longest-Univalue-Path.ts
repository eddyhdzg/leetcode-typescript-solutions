// TS
function longestUnivaluePath(root: TreeNode | null): number {
  let res = 0;

  const traverse = (node: TreeNode | null, value?: number) => {
    if (!node) return 0;
    const left = traverse(node.left, node.val);
    const right = traverse(node.right, node.val);
    res = Math.max(res, left + right);
    return node.val === value ? Math.max(left, right) + 1 : 0;
  };

  traverse(root);
  return res;
}

// JS
// Runtime: 240 ms, faster than 96.33% of JavaScript online submissions for Longest Univalue Path.
// Memory Usage: 59.6 MB, less than 52.29% of JavaScript online submissions for Longest Univalue Path.
// var longestUnivaluePath = function (root) {
//   let res = 0;

//   const traverse = (node, value) => {
//     if (!node) return 0;
//     const left = traverse(node.left, node.val);
//     const right = traverse(node.right, node.val);
//     res = Math.max(res, left + right);
//     return node.val === value ? Math.max(left, right) + 1 : 0;
//   };

//   traverse(root);
//   return res;
// };
