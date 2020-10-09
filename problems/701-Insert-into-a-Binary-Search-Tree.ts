// TS
// Runtime: 128 ms, faster than 100.00% of TypeScript online submissions for Insert into a Binary Search Tree.
// Memory Usage: 46.9 MB, less than 42.86% of TypeScript online submissions for Insert into a Binary Search Tree.
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return new TreeNode(val);

  if (root.val > val) root.left = insertIntoBST(root.left, val);
  else root.right = insertIntoBST(root.right, val);

  return root;
}

// JS
// Runtime: 120 ms, faster than 86.92% of JavaScript online submissions for Insert into a Binary Search Tree.
// Memory Usage: 46.7 MB, less than 22.90% of JavaScript online submissions for Insert into a Binary Search Tree.
// var insertIntoBST = function (root, val) {
//   if (root === null) return new TreeNode(val);

//   if (root.val > val) root.left = insertIntoBST(root.left, val);
//   else root.right = insertIntoBST(root.right, val);

//   return root;
// };
