// Runtime: 80 ms, faster than 84.30% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 38.8 MB, less than 15.79% of JavaScript online submissions for Symmetric Tree.

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  const helper = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
    if (!node1 && !node2) return true;
    if (node1 && node2) {
      return (
        node1.val === node2.val &&
        helper(node1.left, node2.right) &&
        helper(node1.right, node2.left)
      );
    }
    return false;
  };

  return helper(root.left, root.right);
}
