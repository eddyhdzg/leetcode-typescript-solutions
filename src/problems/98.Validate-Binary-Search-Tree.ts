// TS Recursion
function isValidBST(root: TreeNode | null): boolean {
  const traverse = (node: TreeNode | null, min: number, max: number) => {
    if (!node) return true;

    if (node.val <= min) return false;
    if (node.val >= max) return false;

    return (
      traverse(node.left, min, node.val) && traverse(node.right, node.val, max)
    );
  };

  return traverse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

// // JS Recursion
// var isValidBST = function (root) {
//   const traverse = (node, min, max) => {
//     if (!node) return true;

//     if (node.val <= min) return false;
//     if (node.val >= max) return false;

//     return (
//       traverse(node.left, min, node.val) && traverse(node.right, node.val, max)
//     );
//   };

//   return traverse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
// };

// // JS Stack
// var isValidBST = function (root) {
//   const stack = [];

//   const traverse = (node) => {
//     if (!node) return;

//     traverse(node.left);
//     stack.push(node.val);
//     traverse(node.right);
//   };

//   traverse(root);

//   for (let i = 1; i < stack.length; i++) {
//     if (stack[i - 1] >= stack[i]) {
//       return false;
//     }
//   }

//   return true;
// };

// // TS Stack
// function isValidBST(root: TreeNode | null): boolean {
//   const stack: number[] = [];

//   const traverse = (node: TreeNode | null) => {
//     if (!node) return;

//     traverse(node.left);
//     stack.push(node.val);
//     traverse(node.right);
//   };

//   traverse(root);

//   for (let i = 1; i < stack.length; i++) {
//     if (stack[i - 1] >= stack[i]) {
//       return false;
//     }
//   }

//   return true;
// }
