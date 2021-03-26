// TS
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
}

// JS
// var lowestCommonAncestor = function (root, p, q) {
//   if (!root || root === p || root === q) return root; // edge case or found p or q: return root
//   const left = lowestCommonAncestor(root.left, p, q); // look if left child has p or q
//   const right = lowestCommonAncestor(root.right, p, q); // look if right child has p or q
//   return left && right ? root : left || right; // if both children returned a node, then current is an ancestor of p and q
// };
