function sumOfLeftLeaves(root: TreeNode | null, isLeftNode = false): number {
  if (!root) return 0;
  if (isLeftNode && !root.left && !root.right) return root.val;

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
}
