interface Node {
  val: number;
  children: Node[];
}

function preorder(root: Node | null): number[] {
  if (!root) return [];

  const res: number[] = [];

  const traverse = (node: Node | null) => {
    if (!node) return;
    res.push(node.val);

    node.children.forEach((child) => {
      traverse(child);
    });
  };

  traverse(root);

  return res;
}
