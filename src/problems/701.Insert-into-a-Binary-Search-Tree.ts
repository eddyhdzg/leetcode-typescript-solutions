// JS
// Runtime: 128 ms, faster than 67.91% of JavaScript online submissions for Insert into a Binary Search Tree.
// Memory Usage: 46.2 MB, less than 94.12% of JavaScript online submissions for Insert into a Binary Search Tree.
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (val < root.val) root.left = insertIntoBST(root.left, val);
  else root.right = insertIntoBST(root.right, val);

  return root;
};

// TS
// Runtime: 128 ms, faster than 92.31% of TypeScript online submissions for Insert into a Binary Search Tree.
// Memory Usage: 46.8 MB, less than 100.00% of TypeScript online submissions for Insert into a Binary Search Tree.
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);

  if (val < root.val) root.left = insertIntoBST(root.left, val);
  else root.right = insertIntoBST(root.right, val);

  return root;
}
