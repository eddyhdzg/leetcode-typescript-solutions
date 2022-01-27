function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  K: number
): number[] {
  if (!root || !target) return [];

  const parentHash: { [key: string]: TreeNode | null } = {};

  const visited = new Set<number>();

  const findTarget = (node: TreeNode | null, parent: TreeNode | null) => {
    if (!node || target.val in parentHash) return;
    parentHash[node.val] = parent;
    findTarget(node.left, node);
    findTarget(node.right, node);
  };

  findTarget(root, null);

  let queue: TreeNode[] = [target];

  while (K) {
    const newQueue: TreeNode[] = [];

    while (queue.length) {
      const curr = queue.shift()!;
      visited.add(curr.val);

      if (parentHash[curr.val] && !visited.has(parentHash[curr.val]!.val)) {
        newQueue.push(parentHash[curr.val]!);
      }

      if (curr.left && !visited.has(curr.left.val)) newQueue.push(curr.left);
      if (curr.right && !visited.has(curr.right.val)) newQueue.push(curr.right);
    }

    queue = newQueue;
    K--;
  }

  return queue.map((node) => node.val);
}
