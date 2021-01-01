// JS
var goodNodes = function (root) {
  const helper = (node, max) => {
    if (!node) return 0;

    const newMax = Math.max(max, node.val);
    const goodNode = node.val >= max ? 1 : 0;

    return goodNode + helper(node.left, newMax) + helper(node.right, newMax);
  };

  return helper(root, Number.MIN_SAFE_INTEGER);
};

// TS
function goodNodes(root: TreeNode | null): number {
  const helper = (node: TreeNode | null, max: number): number => {
    if (!node) return 0;

    const newMax = Math.max(max, node.val);
    const goodNode = node.val >= max ? 1 : 0;

    return goodNode + helper(node.left, newMax) + helper(node.right, newMax);
  };

  return helper(root, Number.MIN_SAFE_INTEGER);
}
