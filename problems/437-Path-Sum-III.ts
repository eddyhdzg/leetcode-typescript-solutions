// Runtime: 132 ms, faster than 40.87% of JavaScript online submissions for Path Sum III.
// Memory Usage: 39.9 MB, less than 78.84% of JavaScript online submissions for Path Sum III.

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

function pathSum(root: TreeNode | null, sum: number): number {
  if (!root) return 0;
  return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

const helper = (root: TreeNode | null, sum: number): number => {
  if (!root) return 0;
  const match = root.val === sum ? 1 : 0;

  return (
    match +
    helper(root.left, sum - root.val) +
    helper(root.right, sum - root.val)
  );
};
