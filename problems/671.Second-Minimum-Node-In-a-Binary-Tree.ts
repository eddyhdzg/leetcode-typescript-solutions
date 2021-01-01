function findSecondMinimumValue(root: TreeNode | null): number {
  if (!root) return -1;
  let min: number = root.val;
  let res: number = Infinity;

  const traverse = (node: TreeNode | null) => {
    if (!node) return;

    if (node.val === min) {
      traverse(node.left);
      traverse(node.right);
    } else if (node.val > min && node.val < res) {
      res = node.val;
    }
  };

  traverse(root);

  return res === Infinity ? -1 : res;
}
