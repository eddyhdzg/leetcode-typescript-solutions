function minDiffInBST(root: TreeNode | null): number {
  let prev: number | undefined;
  let res = Infinity;

  const inOrderTraverse = (node: TreeNode | null) => {
    if (!node) return;
    inOrderTraverse(node.left);
    if (prev !== undefined) {
      res = Math.min(node.val - prev, res);
    }
    prev = node.val;
    inOrderTraverse(node.right);
  };
  inOrderTraverse(root);

  return res;
}
