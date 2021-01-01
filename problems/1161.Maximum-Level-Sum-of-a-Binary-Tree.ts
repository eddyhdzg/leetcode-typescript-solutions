// TS
// Runtime: 196 ms, faster than 100.00% of TypeScript online submissions for Maximum Level Sum of a Binary Tree.
// Memory Usage: 57.1 MB, less than 50.00% of TypeScript online submissions for Maximum Level Sum of a Binary Tree.
function maxLevelSum(root: TreeNode | null): number {
  if (!root) return 0;

  const hash: { [key: string]: number } = {};
  let level = 0;
  let queue: TreeNode[] = [root];

  while (queue.length) {
    level++;
    hash[level] = 0;
    const newQueue: TreeNode[] = [];

    while (queue.length) {
      const { val, left, right } = queue.pop()!;
      hash[level] += val;

      if (left) newQueue.push(left);
      if (right) newQueue.push(right);
    }

    queue = newQueue;
  }

  const levels = Object.entries(hash).sort(([, a], [, b]) => b - a);

  return Number(levels[0][0]);
}

// JS
// Runtime: 200 ms, faster than 66.24% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.
// Memory Usage: 57 MB, less than 42.04% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.
// var maxLevelSum = function (root) {
//   const hash = {};
//   let level = 0;
//   let queue = [root];

//   while (queue.length) {
//     level++;
//     hash[level] = 0;
//     const newQueue = [];

//     while (queue.length) {
//       const { val, left, right } = queue.pop();
//       hash[level] += val;

//       if (left) newQueue.push(left);
//       if (right) newQueue.push(right);
//     }

//     queue = newQueue;
//   }

//   const levels = Object.entries(hash).sort(([, a], [, b]) => b - a);

//   return Number(levels[0][0]);
// };
