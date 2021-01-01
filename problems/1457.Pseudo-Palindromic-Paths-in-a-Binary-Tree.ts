// JS
// Runtime: 252 ms, faster than 84.48% of JavaScript online submissions for Pseudo-Palindromic Paths in a Binary Tree.
// Memory Usage: 77.3 MB, less than 34.48% of JavaScript online submissions for Pseudo-Palindromic Paths in a Binary Tree.
var pseudoPalindromicPaths = function (root) {
  let res = 0;

  const helper = (node, nums) => {
    if (!node) return;

    const newNums = [...nums, node.val];

    if (!node.left && !node.right) {
      const freqs = Array(10).fill(0);
      newNums.forEach((num) => freqs[num]++);
      const odds = freqs.reduce((acc, curr) => (curr % 2) + acc, 0);

      if (odds < 2) {
        res++;
      }

      return;
    }

    helper(node.left, newNums);
    helper(node.right, newNums);
  };

  helper(root, []);

  return res;
};

// TS
// Runtime: 288 ms, faster than 100.00% of TypeScript online submissions for Pseudo-Palindromic Paths in a Binary Tree.
// Memory Usage: 77.9 MB, less than 100.00% of TypeScript online submissions for Pseudo-Palindromic Paths in a Binary Tree.
function pseudoPalindromicPaths(root: TreeNode | null): number {
  let res = 0;

  const helper = (node: TreeNode | null, nums: number[]) => {
    if (!node) return;

    const newNums = [...nums, node.val];

    if (!node.left && !node.right) {
      const freqs: number[] = Array(10).fill(0);
      newNums.forEach((num) => freqs[num]++);
      const odds = freqs.reduce((acc, curr) => (curr % 2) + acc, 0);

      if (odds < 2) {
        res++;
      }

      return;
    }

    helper(node.left, newNums);
    helper(node.right, newNums);
  };

  helper(root, []);

  return res;
}
