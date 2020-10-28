// TS
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Increasing Order Search Tree.
// Memory Usage: 40.1 MB, less than 14.29% of TypeScript online submissions for Increasing Order Search Tree.
function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const dummy = new TreeNode(0);
  let curr = dummy;

  const traverse = (root: TreeNode) => {
    if (root.left) {
      traverse(root.left);
      root.left = null;
    }

    curr.right = root;
    curr = curr.right;

    if (root.right) {
      traverse(root.right);
    }
  };

  traverse(root);
  return dummy.right;
}

// JS
// Runtime: 80 ms, faster than 45.17% of JavaScript online submissions for Increasing Order Search Tree.
// Memory Usage: 39 MB, less than 5.30% of JavaScript online submissions for Increasing Order Search Tree.
// var increasingBST = function (root) {
//   if (!root) return null;
//   const dummy = new TreeNode(0);
//   let curr = dummy;

//   const traverse = (root) => {
//     if (root.left) {
//       traverse(root.left);
//       root.left = null;
//     }

//     curr.right = root;
//     curr = curr.right;

//     if (root.right) {
//       traverse(root.right);
//     }
//   };

//   traverse(root);
//   return dummy.right;
// };
