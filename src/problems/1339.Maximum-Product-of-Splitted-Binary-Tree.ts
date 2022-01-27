// TS
// Runtime: 188 ms, faster than 100.00% of TypeScript online submissions for Maximum Product of Splitted Binary Tree.
// Memory Usage: 65.9 MB, less than 100.00% of TypeScript online submissions for Maximum Product of Splitted Binary Tree.

const getSum = (node: TreeNode | null): number => {
  if (!node) return 0;
  return node.val + getSum(node.left) + getSum(node.right);
};

function maxProduct(root: TreeNode | null): number {
  let res = 1;
  const total = getSum(root);

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;
    const sub = node.val + dfs(node.left) + dfs(node.right);
    res = Math.max(res, sub * (total - sub));
    return sub;
  };

  dfs(root);

  return res % (10 ** 9 + 7);
}
