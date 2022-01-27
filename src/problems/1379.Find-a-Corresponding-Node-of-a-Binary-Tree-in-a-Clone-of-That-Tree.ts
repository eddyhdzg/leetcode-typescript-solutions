// TS
// Runtime: 324 ms, faster than 80.00% of TypeScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
// Memory Usage: 60.6 MB, less than 40.00% of TypeScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  const dfs = (o: TreeNode | null, c: TreeNode | null): TreeNode | null => {
    if (!o) return null;

    const left = dfs(o.left, c!.left);

    if (left) {
      return left;
    }

    if (o === target) {
      return c;
    }

    return dfs(o.right, c!.right);
  };

  return dfs(original, cloned);
}
