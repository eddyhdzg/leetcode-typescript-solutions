// JS
// Runtime: 76 ms, faster than 98.63% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
// Memory Usage: 41.7 MB, less than 38.13% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
var maxAncestorDiff = function (root) {
  if (!root) return 0;

  const helper = (node, min, max) => {
    if (!node) return 0;

    const newMin = Math.min(min, node.val);
    const newMax = Math.max(max, node.val);

    const left = helper(node.left, newMin, newMax);
    const right = helper(node.right, newMin, newMax);

    return Math.max(newMax - newMin, left, right);
  };

  return helper(root, root.val, root.val);
};

// TS
// Runtime: 84 ms, faster than 92.50% of TypeScript online submissions for Maximum Difference Between Node and Ancestor.
// Memory Usage: 42.3 MB, less than 50.00% of TypeScript online submissions for Maximum Difference Between Node and Ancestor.
function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) return 0;

  const helper = (node: TreeNode | null, min: number, max: number): number => {
    if (!node) return 0;

    const newMin = Math.min(min, node.val);
    const newMax = Math.max(max, node.val);

    const left = helper(node.left, newMin, newMax);
    const right = helper(node.right, newMin, newMax);

    return Math.max(newMax - newMin, left, right);
  };

  return helper(root, root.val, root.val);
}
