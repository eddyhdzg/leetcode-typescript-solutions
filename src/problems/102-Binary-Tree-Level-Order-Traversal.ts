// Runtime: 72 ms, faster than 88.87% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 38.5 MB, less than 15.78% of JavaScript online submissions for Binary Tree Level Order Traversal.

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

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];

  const helper = (node: TreeNode | null, i: number) => {
    if (!node) return;
    helper(node.left, i + 1);
    res[i] ? res[i].push(node.val) : (res[i] = [node.val]);
    helper(node.right, i + 1);
  };

  helper(root, 0);

  return res;
}
