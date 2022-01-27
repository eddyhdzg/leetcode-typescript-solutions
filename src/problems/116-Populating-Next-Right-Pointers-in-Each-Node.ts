interface Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
}

function connect(root: Node | null): Node | null {
  if (!root) return root;
  let queue: Node[] = [root];

  while (queue.length) {
    const nextQueue: Node[] = [];

    while (queue.length) {
      const curr = queue.shift()!;

      if (queue.length) curr.next = queue[0];
      if (curr.left) nextQueue.push(curr.left);
      if (curr.right) nextQueue.push(curr.right);
    }

    queue = nextQueue;
  }

  return root;
}
