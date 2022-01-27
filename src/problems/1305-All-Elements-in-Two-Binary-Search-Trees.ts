// Runtime: 204 ms, faster than 56.04% of JavaScript online submissions for All Elements in Two Binary Search Trees.
// Memory Usage: 48.8 MB, less than 52.19% of JavaScript online submissions for All Elements in Two Binary Search Trees.
var getAllElements = function (root1, root2, list = []) {
  const getAllNodes = (root) => {
    if (root) {
      list.push(root.val);
      getAllNodes(root.left);
      getAllNodes(root.right);
    }
  };

  getAllNodes(root1);
  getAllNodes(root2);

  return list.sort((a, b) => a - b);
};

// Runtime: 188 ms, faster than 100.00% of TypeScript online submissions for All Elements in Two Binary Search Trees.
// Memory Usage: 47.9 MB, less than 100.00% of TypeScript online submissions for All Elements in Two Binary Search Trees.
function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null,
  list: number[] = []
): number[] {
  const getAllNodes = (root: TreeNode | null) => {
    if (root) {
      list.push(root.val);
      getAllNodes(root.left);
      getAllNodes(root.right);
    }
  };

  getAllNodes(root1);
  getAllNodes(root2);

  return list.sort((a, b) => a - b);
}
