function connect(root: Node | null): Node | null {
  if (!root) return root;
  const stack: Node[] = [root];

  while (stack.length) {
    let prev: Node | null = null;
    const nextStack: Node[] = [];

    while (stack.length) {
      const curr = stack.shift()!;
      if (prev) {
        prev!.next = curr;
      }
      prev = curr;

      if (curr.left) nextStack.push(curr.left);
      if (curr.right) nextStack.push(curr.right);
    }

    stack.push(...nextStack);
  }

  return root;
}
