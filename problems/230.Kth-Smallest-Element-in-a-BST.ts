// JS
// Runtime: 96 ms, faster than 51.83% of JavaScript online submissions for Kth Smallest Element in a BST.
// Memory Usage: 44.2 MB, less than 78.62% of JavaScript online submissions for Kth Smallest Element in a BST.
var kthSmallest = function (root, k) {
  let res;

  const inOrderTraverse = (node) => {
    if (!node || res !== undefined) return;
    inOrderTraverse(node.left);
    k--;
    if (k === 0) res = node.val;
    inOrderTraverse(node.right);
  };

  inOrderTraverse(root);

  return res;
};

// TS
function kthSmallest(root: TreeNode | null, k: number): number {
  let res: number | undefined;

  const inOrderTraverse = (node: TreeNode | null) => {
    if (!node || res !== undefined) return;
    inOrderTraverse(node.left);
    k--;
    if (k === 0) res = node.val;
    inOrderTraverse(node.right);
  };

  inOrderTraverse(root);

  return res!;
}
