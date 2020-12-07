// TS
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Cousins in Binary Tree.
// Memory Usage: 40.1 MB, less than 100.00% of TypeScript online submissions for Cousins in Binary Tree.

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  const nodes: { depth: number; parent: number | null }[] = [];

  const helper = (
    node: TreeNode | null,
    depth: number = 0,
    parent: number | null = null
  ) => {
    if (!node) return 0;

    if (node.val === x || node.val === y) {
      nodes.push({ depth, parent: parent });
      return;
    }

    helper(node.left, depth + 1, node.val);
    helper(node.right, depth + 1, node.val);
  };

  helper(root);

  const [first, second] = nodes;

  if (
    first &&
    second &&
    first.depth === second.depth &&
    first.parent !== second.parent
  ) {
    return true;
  }

  return false;
}
