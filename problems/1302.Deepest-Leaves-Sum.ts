function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0;

  const queue: TreeNode[] = [root];
  const levels: number[] = [];

  while (queue.length) {
    levels.push(0);

    const newQueue: TreeNode[] = [];

    while (queue.length) {
      const curr = queue.shift()!;
      levels[levels.length - 1] += curr.val;

      if (curr.left) newQueue.push(curr.left);
      if (curr.right) newQueue.push(curr.right);
    }

    queue.push(...newQueue);
  }

  return levels.pop()!;
}
