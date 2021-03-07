function isCompleteTree(root: TreeNode | null): boolean {
  let seenNull = false;
  let queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    const next: (TreeNode | null)[] = [];

    for (let node of queue) {
      if (!node) seenNull = true;
      else {
        if (seenNull) return false;
        next.push(node.left);
        next.push(node.right);
      }
    }
    console.log(next);
    queue = next;
  }
  return true;
}
