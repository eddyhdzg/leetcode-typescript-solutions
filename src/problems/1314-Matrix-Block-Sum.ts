// TS
// Runtime: 100 ms, faster than 100.00% of TypeScript online submissions for Matrix Block Sum.
// Memory Usage: 40.6 MB, less than 100.00% of TypeScript online submissions for Matrix Block Sum.
function matrixBlockSum(mat: number[][], K: number): number[][] {
  const dp: number[][] = [
    Array(mat[0].length + 1).fill(0),
    ...mat.map((row) => [0, ...row]),
  ];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      dp[i + 1][j + 1] = mat[i][j] + dp[i][j + 1] + dp[i + 1][j] - dp[i][j];
    }
  }

  const m = mat.length;
  const n = mat[0].length;

  for (let i = 1; i < dp.length; i++) {
    const r1 = Math.max(0, i - K - 1);
    const r2 = Math.min(m, i + K);
    for (let j = 1; j < dp[0].length; j++) {
      const c1 = Math.max(0, j - K - 1);
      const c2 = Math.min(n, j + K);

      mat[i - 1][j - 1] = dp[r2][c2] - dp[r1][c2] - dp[r2][c1] + dp[r1][c1];
    }
  }

  return mat;
}

// JS
// Runtime: 100 ms, faster than 83.15% of JavaScript online submissions for Matrix Block Sum.
// Memory Usage: 39.9 MB, less than 20.22% of JavaScript online submissions for Matrix Block Sum.
// var matrixBlockSum = function (mat, K) {
//   const dp = [
//     Array(mat[0].length + 1).fill(0),
//     ...mat.map((row) => [0, ...row]),
//   ];

//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[0].length; j++) {
//       dp[i + 1][j + 1] = mat[i][j] + dp[i][j + 1] + dp[i + 1][j] - dp[i][j];
//     }
//   }

//   const m = mat.length;
//   const n = mat[0].length;

//   for (let i = 1; i < dp.length; i++) {
//     const r1 = Math.max(0, i - K - 1);
//     const r2 = Math.min(m, i + K);
//     for (let j = 1; j < dp[0].length; j++) {
//       const c1 = Math.max(0, j - K - 1);
//       const c2 = Math.min(n, j + K);

//       mat[i - 1][j - 1] = dp[r2][c2] - dp[r1][c2] - dp[r2][c1] + dp[r1][c1];
//     }
//   }

//   return mat;
// };
