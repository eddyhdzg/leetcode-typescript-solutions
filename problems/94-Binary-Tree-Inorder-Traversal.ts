// Runtime: 68 ms, faster than 85.67% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 37.1 MB, less than 5.03% of JavaScript online submissions for Binary Tree Inorder Traversal.

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}
