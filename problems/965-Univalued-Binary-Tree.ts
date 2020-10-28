// TS
function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) return true;

  const traverse = (node: TreeNode | null): boolean => {
    if (!node) return true;
    if (root.val !== node.val) return false;
    return traverse(node.left) && traverse(node.right);
  };

  return traverse(root);
}

// JS
// var isUnivalTree = function (root) {
//   if (!root) return true;

//   const traverse = (node) => {
//     if (!node) return true;
//     if (root.val !== node.val) return false;
//     return traverse(node.left) && traverse(node.right);
//   };

//   return traverse(root);
// };
