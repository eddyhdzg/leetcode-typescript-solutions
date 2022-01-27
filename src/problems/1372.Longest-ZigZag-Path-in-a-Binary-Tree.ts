// TS
// Runtime: 196 ms, faster than 100.00% of TypeScript online submissions for Longest ZigZag Path in a Binary Tree.
// Memory Usage: 62.1 MB, less than 50.00% of TypeScript online submissions for Longest ZigZag Path in a Binary Tree.

type Dir = 1 | 0;

function longestZigZag(root: TreeNode | null): number {
  let max = 0;

  const traverse = (node: TreeNode | null, paths: number, dir?: Dir) => {
    if (!node) return;

    max = Math.max(paths, max);

    const left = !dir ? 1 : paths + 1;
    const right = dir ? 1 : paths + 1;

    traverse(node.left, left, 0);
    traverse(node.right, right, 1);
  };

  traverse(root, 0);

  return max;
}

// Left = 0
// Right = 1

// JS
// Runtime: 200 ms, faster than 87.50% of JavaScript online submissions for Longest ZigZag Path in a Binary Tree.
// Memory Usage: 60.4 MB, less than 70.83% of JavaScript online submissions for Longest ZigZag Path in a Binary Tree.

// var longestZigZag = function (root) {
//   let max = 0;

//   const traverse = (node, paths, dir) => {
//     if (!node) return;

//     max = Math.max(paths, max);

//     const left = !dir ? 1 : paths + 1;
//     const right = dir ? 1 : paths + 1;

//     traverse(node.left, left, 0);
//     traverse(node.right, right, 1);
//   };

//   traverse(root, 0);

//   return max;
// };
