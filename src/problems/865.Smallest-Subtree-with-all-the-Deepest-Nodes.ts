// Note: a memorization hash could had been used if the test cases were to big.

// TS
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Smallest Subtree with all the Deepest Nodes.
// Memory Usage: 40.8 MB, less than 100.00% of TypeScript online submissions for Smallest Subtree with all the Deepest Nodes.
function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  if (!root) return root;

  const left = getDepth(root.left);
  const right = getDepth(root.right);

  if (left > right) {
    return subtreeWithAllDeepest(root.left);
  }

  if (left < right) {
    return subtreeWithAllDeepest(root.right);
  }

  return root;
}

const getDepth = (node: TreeNode | null): number => {
  if (!node) return 0;

  const left = getDepth(node.left);
  const right = getDepth(node.right);

  return Math.max(left, right) + 1;
};

// JS
// Runtime: 80 ms, faster than 88.10% of JavaScript online submissions for Smallest Subtree with all the Deepest Nodes.
// Memory Usage: 39.9 MB, less than 95.24% of JavaScript online submissions for Smallest Subtree with all the Deepest Nodes.
// var subtreeWithAllDeepest = function (root) {
//   if (!root) return root;

//   const left = getDepth(root.left);
//   const right = getDepth(root.right);

//   if (left > right) {
//     return subtreeWithAllDeepest(root.left);
//   }

//   if (left < right) {
//     return subtreeWithAllDeepest(root.right);
//   }

//   return root;
// };

// const getDepth = (node) => {
//   if (!node) return 0;

//   const left = getDepth(node.left);
//   const right = getDepth(node.right);

//   return Math.max(left, right) + 1;
// };
