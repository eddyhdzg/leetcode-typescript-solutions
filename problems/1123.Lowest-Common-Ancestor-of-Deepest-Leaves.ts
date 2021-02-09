// JS
// Runtime: 88 ms, faster than 87.77% of JavaScript online submissions for Lowest Common Ancestor of Deepest Leaves.
// Memory Usage: 43 MB, less than 43.09% of JavaScript online submissions for Lowest Common Ancestor of Deepest Leaves.
var lcaDeepestLeaves = function (root) {
  const getHeight = (node) => {
    if (!node) return 0;

    const left = getHeight(node.left);
    const right = getHeight(node.right);

    return Math.max(left, right) + 1;
  };

  const helper = (node) => {
    if (!node) return null;

    const left = getHeight(node.left);
    const right = getHeight(node.right);

    if (left > right) {
      return helper(node.left);
    }

    if (left < right) {
      return helper(node.right);
    }

    // left and right have same height
    return node;
  };

  return helper(root);
};

// TS
// Runtime: 96 ms, faster than 85.71% of TypeScript online submissions for Lowest Common Ancestor of Deepest Leaves.
// Memory Usage: 43.5 MB, less than 42.86% of TypeScript online submissions for Lowest Common Ancestor of Deepest Leaves.
function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  const getHeight = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left = getHeight(node.left);
    const right = getHeight(node.right);

    return Math.max(left, right) + 1;
  };

  const helper = (node: TreeNode | null): TreeNode | null => {
    if (!node) return null;

    const left = getHeight(node.left);
    const right = getHeight(node.right);

    if (left > right) {
      return helper(node.left);
    }

    if (left < right) {
      return helper(node.right);
    }

    return node;
  };

  return helper(root);
}
