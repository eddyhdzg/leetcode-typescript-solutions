// JS
// Runtime: 96 ms, faster than 63.64% of JavaScript online submissions for Smallest String Starting From Leaf.
// Memory Usage: 43.4 MB, less than 96.10% of JavaScript online submissions for Smallest String Starting From Leaf.
var smallestFromLeaf = function (root) {
  let res = '{'; // String.fromCharCode(26 + 97) or the character after z

  const traverse = (node, path) => {
    if (!node) return;
    const newPath = String.fromCharCode(node.val + 97) + path;
    if (!node.left && !node.right && res > newPath) res = newPath;
    traverse(node.left, newPath);
    traverse(node.right, newPath);
  };

  traverse(root, '');
  return res;
};

// TS
// Runtime: 92 ms, faster than 100.00% of TypeScript online submissions for Smallest String Starting From Leaf.
// Memory Usage: 44.5 MB, less than 66.67% of TypeScript online submissions for Smallest String Starting From Leaf.
function smallestFromLeaf(root: TreeNode | null): string {
  let res: string = '{';

  const traverse = (node: TreeNode | null, path: string) => {
    if (!node) return;
    const newPath = String.fromCharCode(node.val + 97) + path;
    if (!node.left && !node.right && res > newPath) res = newPath;
    traverse(node.left, newPath);
    traverse(node.right, newPath);
  };

  traverse(root, '');
  return res;
}
