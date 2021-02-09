// JS
// Runtime: 80 ms, faster than 84.93% of JavaScript online submissions for Vertical Order Traversal of a Binary Tree.
// Memory Usage: 40.8 MB, less than 23.56% of JavaScript online submissions for Vertical Order Traversal of a Binary Tree.
var verticalTraversal = function (root) {
  const hash = {};

  const helper = (node, x = 0, y = 0) => {
    if (!node) return;
    helper(node.left, x - 1, y - 1);

    if (!(x in hash)) {
      hash[x] = [];
    }

    hash[x].push({ y, val: node.val });
    helper(node.right, x + 1, y - 1);
  };

  helper(root);

  return Object.entries(hash)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([, array]) =>
      array
        .sort(({ val: Aval }, { val: Bval }) => Aval - Bval)
        .sort(({ y: Ay }, { y: By }) => By - Ay)
        .map(({ val }) => val)
    );
};

// TS
// Runtime: 84 ms, faster than 91.67% of TypeScript online submissions for Vertical Order Traversal of a Binary Tree.
// Memory Usage: 40.6 MB, less than 50.00% of TypeScript online submissions for Vertical Order Traversal of a Binary Tree.

function verticalTraversal(root: TreeNode | null): number[][] {
  const hash: { [key: string]: { y: number; val: number }[] } = {};

  const helper = (node: TreeNode | null, x = 0, y = 0): void => {
    if (!node) return;
    helper(node.left, x - 1, y - 1);

    if (!(x in hash)) {
      hash[x] = [];
    }

    hash[x].push({ y, val: node.val });
    helper(node.right, x + 1, y - 1);
  };

  helper(root);

  return Object.entries(hash)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([, array]) =>
      array
        .sort(({ val: Aval }, { val: Bval }) => Aval - Bval)
        .sort(({ y: Ay }, { y: By }) => By - Ay)
        .map(({ val }) => val)
    );
}
