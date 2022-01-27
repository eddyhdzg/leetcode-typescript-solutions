// Runtime: 76 ms, faster than 50.75% of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 37 MB, less than 6.24% of JavaScript online submissions for Binary Tree Postorder Traversal.

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  return [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val,
  ];
}
