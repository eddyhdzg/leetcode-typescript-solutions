// TS
// Runtime: 124 ms, faster than 55.56% of TypeScript online submissions for Two Sum IV - Input is a BST.
// Memory Usage: 47.8 MB, less than 66.67% of TypeScript online submissions for Two Sum IV - Input is a BST.
function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>();

  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    const curr = queue.shift()!;
    if (curr) {
      if (set.has(k - curr.val)) {
        return true;
      }
      set.add(curr.val);
      queue.push(curr.left, curr.right);
    }
  }

  return false;
}

// JS
// Runtime: 120 ms, faster than 48.77% of JavaScript online submissions for Two Sum IV - Input is a BST.
// Memory Usage: 47.5 MB, less than 83.00% of JavaScript online submissions for Two Sum IV - Input is a BST.
// var findTarget = function (root, k) {
//   const set = new Set();

//   const queue = [root];

//   while (queue.length) {
//     const curr = queue.shift();
//     if (curr) {
//       if (set.has(k - curr.val)) {
//         return true;
//       }
//       set.add(curr.val);
//       queue.push(curr.left, curr.right);
//     }
//   }

//   return false;
// };
