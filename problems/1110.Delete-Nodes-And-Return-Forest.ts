function delNodes(
  root: TreeNode | null,
  to_delete: number[]
): Array<TreeNode | null> {
  const res: Array<TreeNode | null> = [];
  const set = new Set<number>(to_delete);

  const dfs = (node: TreeNode | null): TreeNode | null => {
    if (!node) return node;
    node.left = dfs(node.left);
    node.right = dfs(node.right);

    if (set.has(node.val)) {
      if (node?.left) {
        res.push(node.left);
      }
      if (node?.right) {
        res.push(node.right);
      }

      return null;
    }

    return node;
  };

  if (root && !set.has(root.val)) {
    res.push(root);
  }

  dfs(root);

  return res;
}
