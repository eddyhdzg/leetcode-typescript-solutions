// Definition for a binary tree node.
// Runtime: 80 ms, faster than 66.27% of JavaScript online submissions for Vertical Order Traversal of a Binary Tree.
// Memory Usage: 38.7 MB, less than 26.39% of JavaScript online submissions for Vertical Order Traversal of a Binary Tree.

/*
class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
*/

function verticalTraversal(root: TreeNode | null): number[][] {
  const hash: { [key: string]: { y: number; val: number }[] } = {};

  const helper = (node: TreeNode | null, x = 0, y = 0): void => {
    if (!node) return;
    helper(node.left, x - 1, y - 1);
    hash[x]
      ? hash[x].push({ y, val: node.val })
      : (hash[x] = [{ y, val: node.val }]);
    helper(node.right, x + 1, y - 1);
  };
  helper(root);

  return Object.entries(hash)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(([, array]) =>
      array
        .sort(({ val: Aval }, { val: Bval }) => Aval - Bval)
        .sort(({ y: Ay }, { y: By }) => By - Ay)
        .map(({ val }) => val)
    );
}
