// TS
// Runtime: 96 ms, faster than 100.00% of TypeScript online submissions for Balanced Binary Tree.
// Memory Usage: 44.7 MB, less than 64.71% of TypeScript online submissions for Balanced Binary Tree.

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  const left = helper(root.left);
  const right = helper(root.right);

  return (
    Math.abs(left - right) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}

const helper = (node: TreeNode | null): number => {
  if (!node) return 0;

  const left = helper(node.left);
  const right = helper(node.right);

  return Math.max(left, right) + 1;
};
