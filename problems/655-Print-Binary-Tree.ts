// TS
const getHeight = (node: TreeNode | null): number => {
  if (!node) return 0;

  const left = getHeight(node.left);
  const right = getHeight(node.right);

  return 1 + Math.max(left, right);
};

function printTree(root: TreeNode | null): string[][] {
  const height = getHeight(root);
  const width = 2 ** height - 1;

  const res: string[][] = Array(height)
    .fill(null)
    .map(() => Array(width).fill(''));

  const traverse = (
    node: TreeNode | null,
    level: number,
    left: number,
    right: number
  ) => {
    if (!node) return;

    const mid = Math.floor((left + right) / 2);

    res[level][mid] = node.val.toString();
    traverse(node.left, level + 1, left, mid);
    traverse(node.right, level + 1, mid, right);
  };

  traverse(root, 0, 0, width);

  return res;
}

// JS
// const getHeight = (node) => {
//   if (!node) return 0;

//   const left = getHeight(node.left);
//   const right = getHeight(node.right);

//   return 1 + Math.max(left, right);
// };

// var printTree = function (root) {
//   const height = getHeight(root);
//   const width = 2 ** height - 1;

//   const res = Array(height)
//     .fill(null)
//     .map(() => Array(width).fill(''));

//   const traverse = (node, level, left, right) => {
//     if (!node) return;

//     const mid = Math.floor((left + right) / 2);

//     res[level][mid] = node.val.toString();
//     traverse(node.left, level + 1, left, mid);
//     traverse(node.right, level + 1, mid, right);
//   };

//   traverse(root, 0, 0, width);

//   return res;
// };
