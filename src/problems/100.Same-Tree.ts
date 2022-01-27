// TS
// Runtime: 88 ms, faster than 16.33% of TypeScript online submissions for Same Tree.
// Memory Usage: 40.2 MB, less than 44.90% of TypeScript online submissions for Same Tree.
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// JS
// Runtime: 72 ms, faster than 93.50% of JavaScript online submissions for Same Tree.
// Memory Usage: 38.9 MB, less than 41.53% of JavaScript online submissions for Same Tree.
// var isSameTree = function (p, q) {
//   if (!p && !q) return true;
//   if (!p || !q) return false;
//   if (p.val !== q.val) return false;
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };
