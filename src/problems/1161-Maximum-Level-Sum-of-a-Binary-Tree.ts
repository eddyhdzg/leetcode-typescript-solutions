// Runtime: 188 ms, faster than 89.35% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.
// Memory Usage: 55.5 MB, less than 60.46% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.

function maxLevelSum(root: TreeNode | null): number {
  const arr: number[] = [];

  const helper = (node: TreeNode | null, level: number) => {
    if (!node) return;
    arr[level] ? (arr[level] += node.val) : arr.push(node.val);
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };

  helper(root, 0);

  return arr.indexOf(Math.max(...arr)) + 1;
}
