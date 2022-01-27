// TS
// Runtime: 96 ms, faster than 100.00% of TypeScript online submissions for Minimum Absolute Difference in BST.
// Memory Usage: 44.6 MB, less than 100.00% of TypeScript online submissions for Minimum Absolute Difference in BST.
function getMinimumDifference(root: TreeNode | null): number {
  let res = Infinity;
  let prev: number | undefined = undefined;

  const traverse = (node: TreeNode | null) => {
    if (!node) return;

    traverse(node.left);

    if (prev !== undefined) {
      res = Math.min(res, Math.abs(node.val - prev));
    }
    prev = node.val;

    traverse(node.right);
  };

  traverse(root);

  return res;
}

// JS
// Runtime: 88 ms, faster than 93.79% of JavaScript online submissions for Minimum Absolute Difference in BST.
// Memory Usage: 44.3 MB, less than 54.48% of JavaScript online submissions for Minimum Absolute Difference in BST.
// var getMinimumDifference = function (root) {
//   let res = Infinity;
//   let prev = undefined;

//   const traverse = (node) => {
//     if (!node) return;

//     traverse(node.left);

//     if (prev !== undefined) {
//       res = Math.min(res, Math.abs(node.val - prev));
//     }
//     prev = node.val;

//     traverse(node.right);
//   };

//   traverse(root);

//   return res;
// };
