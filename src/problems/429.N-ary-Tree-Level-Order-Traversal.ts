// JS
// Runtime: 92 ms, faster than 96.24% of JavaScript online submissions for N-ary Tree Level Order Traversal.
// Memory Usage: 42.7 MB, less than 89.67% of JavaScript online submissions for N-ary Tree Level Order Traversal.
var levelOrder = function (root) {
  if (!root) return [];

  const res = [];
  let queue = [root];
  let level = 0;

  while (queue.length) {
    res.push([]);
    const newQueue = [];

    while (queue.length) {
      const { val, children } = queue.shift();

      res[level].push(val);
      children.forEach((child) => {
        newQueue.push(child);
      });
    }

    queue = newQueue;
    level++;
  }

  return res;
};

// TS
// Runtime: 156 ms, faster than 16.67% of TypeScript online submissions for N-ary Tree Level Order Traversal.
// Memory Usage: 44.1 MB, less than 50.00% of TypeScript online submissions for N-ary Tree Level Order Traversal.
function levelOrder(root: Node | null): number[][] {
  if (!root) return [];

  const res: number[][] = [];
  let queue: Node[] = [root];
  let level = 0;

  while (queue.length) {
    res.push([]);
    const newQueue: Node[] = [];

    while (queue.length) {
      const { val, children } = queue.shift()!;

      res[level].push(val);
      children.forEach((child) => {
        newQueue.push(child);
      });
    }

    queue = newQueue;
    level++;
  }

  return res;
}
