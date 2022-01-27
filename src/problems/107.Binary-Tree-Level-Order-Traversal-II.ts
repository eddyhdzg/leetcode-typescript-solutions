function levelOrderBottom(root: TreeNode | null): number[][] {
  const res: number[][] = [];

  const helper = (node: TreeNode | null, level: number) => {
    if (!node) return;
    if (!res[level]) res.push([node.val]);
    else res[level].push(node.val);
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };

  helper(root, 0);

  return res.reverse();
}
