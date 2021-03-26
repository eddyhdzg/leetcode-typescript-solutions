function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];

  const traverse = (node: TreeNode | null, path: number[], sum: number) => {
    if (!node) return;

    const newSum = sum + node.val;

    if (!node.left && !node.right && newSum === targetSum) {
      res.push([...path, node.val]);
    }

    traverse(node.left, [...path, node.val], newSum);
    traverse(node.right, [...path, node.val], newSum);
  };

  traverse(root, [], 0);
  return res;
}
