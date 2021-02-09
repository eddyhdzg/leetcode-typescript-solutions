// JS
var largestValues = function (root) {
  if (!root) return [];
  const res = [];
  let queue = [root];
  let level = 0;

  while (queue.length) {
    const newQueue = [];
    res[level] = Number.MIN_SAFE_INTEGER;

    while (queue.length) {
      const curr = queue.pop();
      res[level] = Math.max(curr.val, res[level]);

      if (curr.left) newQueue.push(curr.left);
      if (curr.right) newQueue.push(curr.right);
    }

    queue = newQueue;
    level++;
  }

  return res;
};

// TS
function largestValues(root: TreeNode | null): number[] {
  if (!root) return [];
  const res: number[] = [];
  let queue: TreeNode[] = [root];
  let level = 0;

  while (queue.length) {
    const newQueue: TreeNode[] = [];
    res[level] = Number.MIN_SAFE_INTEGER;

    while (queue.length) {
      const curr = queue.pop()!;
      res[level] = Math.max(curr.val, res[level]);

      if (curr.left) newQueue.push(curr.left);
      if (curr.right) newQueue.push(curr.right);
    }

    queue = newQueue;
    level++;
  }

  return res;
}
