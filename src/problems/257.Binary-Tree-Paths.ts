// Runtime: 84 ms, faster than 90.00% of TypeScript online submissions for Binary Tree Paths.
// Memory Usage: 40.3 MB, less than 50.00% of TypeScript online submissions for Binary Tree Paths.
function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = [];

  const helper = (node: TreeNode | null | undefined, path: string) => {
    if (!node) return;

    const newPath = path + `${node.val}->`;

    if (!node.left && !node.right) {
      res.push(path + node.val);
      return;
    }

    helper(node.left, newPath);
    helper(node.right, newPath);
  };

  helper(root, '');

  return res;
}
