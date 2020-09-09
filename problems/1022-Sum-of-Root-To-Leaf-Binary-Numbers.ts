// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Sum of Root To Leaf Binary Numbers.
// Memory Usage: 39.2 MB, less than 100.00% of TypeScript online submissions for Sum of Root To Leaf Binary Numbers.

function sumRootToLeaf(root: TreeNode | null, sum: string = ''): number {
    if (!root) {
      return 0;
    }

    const nextSum = sum + root.val;

    if (!root.left && !root.right) {
      return parseInt(nextSum, 2);
    }

    return sumRootToLeaf(root.left, nextSum) + sumRootToLeaf(root.right, nextSum);
  }


  // Runtime: 76 ms, faster than 95.48% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.
  // Memory Usage: 38.4 MB, less than 77.97% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.

  // var sumRootToLeaf = function (root, sum = '') {
  //   if (!root) {
  //     return 0;
  //   }

  //   const nextSum = sum + root.val;
  //   if (!root.left && !root.right) {
  //     return parseInt(nextSum, 2);
  //   }

  //   return sumRootToLeaf(root.left, nextSum) + sumRootToLeaf(root.right, nextSum);
  };

