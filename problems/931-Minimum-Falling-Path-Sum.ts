// TS
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Minimum Falling Path Sum.
// Memory Usage: 41.1 MB, less than 50.00% of TypeScript online submissions for Minimum Falling Path Sum.
function minFallingPathSum(A: number[][]): number {
  const MAX_WIDTH = A[0].length;

  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      const start = Math.max(j - 1, 0);
      const end = Math.min(j + 2, MAX_WIDTH);
      A[i][j] += Math.min(...A[i - 1].slice(start, end));
    }
  }

  return Math.min(...A[A.length - 1]);
}

// JS
// Runtime: 108 ms, faster than 34.40% of JavaScript online submissions for Minimum Falling Path Sum.
// Memory Usage: 40.6 MB, less than 24.80% of JavaScript online submissions for Minimum Falling Path Sum.
// var minFallingPathSum = function (A) {
//   const MAX_WIDTH = A[0].length;

//   for (let i = 1; i < A.length; i++) {
//     for (let j = 0; j < A[0].length; j++) {
//       const start = Math.max(j - 1, 0);
//       const end = Math.min(j + 2, MAX_WIDTH);
//       A[i][j] += Math.min(...A[i - 1].slice(start, end));
//     }
//   }

//   return Math.min(...A[A.length - 1]);
// };
