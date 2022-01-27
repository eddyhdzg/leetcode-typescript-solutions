// TS
// Runtime: 128 ms, faster than 100.00% of TypeScript online submissions for Find Elements in a Contaminated Binary Tree.
// Memory Usage: 48.8 MB, less than 100.00% of TypeScript online submissions for Find Elements in a Contaminated Binary Tree.

class FindElements {
  set = new Set<number>();

  constructor(root: TreeNode | null) {
    this.decontaminateTree(root, 0);
  }

  private decontaminateTree = (node: TreeNode | null, nextVal: number) => {
    if (!node) return;
    node.val = nextVal;
    this.set.add(nextVal);

    const nextLeftValue = 2 * nextVal + 1;
    const nextRightValue = 2 * nextVal + 2;

    this.decontaminateTree(node.left, nextLeftValue);
    this.decontaminateTree(node.right, nextRightValue);
  };

  find(target: number): boolean {
    return this.set.has(target);
  }
}
