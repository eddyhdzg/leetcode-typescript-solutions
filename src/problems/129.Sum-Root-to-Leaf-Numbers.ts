// TS
// Runtime: 88 ms, faster than 56.52% of TypeScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 40.5 MB, less than 26.09% of TypeScript online submissions for Sum Root to Leaf Numbers.
const helper = (node: TreeNode | null, sum: number) => {
  if (!node) return 0;
  const newSum = sum * 10 + node.val;
  if (!node.left && !node.right) return newSum;
  return helper(node.left, newSum) + helper(node.right, newSum);
};

function sumNumbers(root: TreeNode | null): number {
  return helper(root, 0);
}

// JS
// Runtime: 76 ms, faster than 93.96% of JavaScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 39.2 MB, less than 100.00% of JavaScript online submissions for Sum Root to Leaf Numbers.
// const helper = (node, sum) => {
//   if (!node) return 0;
//   const newSum = sum * 10 + node.val;
//   if (!node.left && !node.right) return newSum;
//   return helper(node.left, newSum) + helper(node.right, newSum);
// };

// var sumNumbers = function (root) {
//   return helper(root, 0);
// };
