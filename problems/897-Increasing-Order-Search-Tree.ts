// TS
// Runtime: 84 ms, faster than 55.56% of TypeScript online submissions for Increasing Order Search Tree.
// Memory Usage: 40.1 MB, less than 88.89% of TypeScript online submissions for Increasing Order Search Tree.
function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const dummy = new TreeNode(0);
  let curr = dummy;

  const traverse = (node: TreeNode | null) => {
    if (!node) return;

    if (node.left) {
      traverse(node.left);
      node.left = null;
    }

    curr.right = node;
    curr = curr.right;

    traverse(node.right);
  };
  traverse(root);

  return dummy.right;
}

// JS
// Runtime: 80 ms, faster than 52.83% of JavaScript online submissions for Increasing Order Search Tree.
// Memory Usage: 38.8 MB, less than 88.21% of JavaScript online submissions for Increasing Order Search Tree.
// var increasingBST = function (root) {
//   if (!root) return null;
//   const dummy = new TreeNode(0);
//   let curr = dummy;

//   const traverse = (node) => {
//     if (!node) return;

//     if (node.left) {
//       traverse(node.left);
//       node.left = null;
//     }

//     curr.right = node;
//     curr = curr.right;

//     traverse(node.right);
//   };
//   traverse(root);

//   return dummy.right;
// };
