// TS
function btreeGameWinningMove(
  root: TreeNode | null,
  n: number,
  x: number
): boolean {
  const count = (node: TreeNode | null): number => {
    if (!node) return 0;
    return count(node.left) + count(node.right) + 1;
  };

  const find = (node: TreeNode | null): TreeNode | null => {
    if (!node) return null;
    if (node.val === x) return node;
    return find(node.left) || find(node.right);
  };

  const xNode = find(root);
  const left = count(xNode!.left);
  const right = count(xNode!.right);
  const parent = n - left - right - 1;
  const y = Math.max(left, right, parent);

  return y > n / 2;
}

// JS
// var btreeGameWinningMove = function (root, n, x) {
//   const count = (node) => {
//     if (!node) return 0;
//     return count(node.left) + count(node.right) + 1;
//   };

//   const find = (node) => {
//     if (!node) return false;
//     if (node.val === x) return node;
//     return find(node.left) || find(node.right);
//   };

//   const xNode = find(root);
//   const left = count(xNode.left);
//   const right = count(xNode.right);
//   const parent = n - left - right - 1;
//   const y = Math.max(left, right, parent);

//   return y > n - y;
// };
