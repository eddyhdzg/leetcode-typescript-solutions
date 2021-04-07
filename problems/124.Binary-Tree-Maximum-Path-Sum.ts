// TS
function maxPathSum(root: TreeNode | null): number {
  let res = -Infinity;

  const traverse = (node: TreeNode | null): number => {
    if (!node) return 0;
    const left = Math.max(0, traverse(node.left));
    const right = Math.max(0, traverse(node.right));
    res = Math.max(res, node.val + left + right);
    return node.val + Math.max(left, right);
  };

  traverse(root);
  return res;
}

// JS
// var maxPathSum = function (root) {
//   let res = -Infinity;

//   const traverse = (node) => {
//     if (!node) return 0;
//     const left = Math.max(0, traverse(node.left));
//     const right = Math.max(0, traverse(node.right));
//     res = Math.max(res, node.val + left + right);
//     return node.val + Math.max(left, right);
//   };

//   traverse(root);
//   return res;
// };
