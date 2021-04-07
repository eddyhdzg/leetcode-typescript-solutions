// TS
function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {
  const res: number[] = [];

  const preorderTraverse = (node: TreeNode | null): boolean => {
    if (!node) return true;
    if (voyage[0] !== node.val) return false;
    voyage.shift();

    if (node.left && node?.left.val !== voyage[0]) {
      res.push(node.val);
      return preorderTraverse(node.right) && preorderTraverse(node.left);
    }
    return preorderTraverse(node.left) && preorderTraverse(node.right);
  };

  return preorderTraverse(root) ? res : [-1];
}

// JS
// var flipMatchVoyage = function (root, voyage) {
//   const res = [];

//   const preorderTraverse = (node) => {
//     if (!node) return true;
//     if (voyage[0] !== node.val) return false;
//     voyage.shift();

//     if (node.left && node.left.val !== voyage[0]) {
//       [node.left, node.right] = [node.right, node.left]; // SWAP
//       res.push(node.val);
//     }
//     return preorderTraverse(node.left) && preorderTraverse(node.right);
//   };

//   return preorderTraverse(root) ? res : [-1];
// };
