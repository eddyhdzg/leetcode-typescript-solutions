function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0;
  let queue: TreeNode[] = [root];
  const levels: number[] = [];

  while (queue.length) {
    levels.unshift(0);
    const newQueue: TreeNode[] = [];

    while (queue.length) {
      const curr = queue.shift()!;
      levels[0] += curr.val;

      if (curr.left) newQueue.push(curr.left);
      if (curr.right) newQueue.push(curr.right);
    }

    queue = newQueue;
  }

  return levels[0];
}
