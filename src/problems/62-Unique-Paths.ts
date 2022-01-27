// Runtime: 84 ms, faster than 55.56% of TypeScript online submissions for Unique Paths.
// Memory Usage: 38 MB, less than 22.22% of TypeScript online submissions for Unique Paths.

function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array(m)
    .fill(null)
    .map(() => Array(n));

  for (let i = 0; i < dp.length; i++) dp[i][0] = 1;
  for (let j = 0; j < dp[0].length; j++) dp[0][j] = 1;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

uniquePaths(3, 7);

// Runtime: 84 ms, faster than 36.59% of JavaScript online submissions for Unique Paths.
// Memory Usage: 37.7 MB, less than 19.45% of JavaScript online submissions for Unique Paths.

// var uniquePaths = function (m, n) {
//   const dp = Array(m)
//     .fill(null)
//     .map(() => Array(n));

//   // Initialize first row and first column with 1s
//   for (let i = 0; i < dp.length; i++) dp[i][0] = 1;
//   for (let j = 0; j < dp[0].length; j++) dp[0][j] = 1;

//   for (let i = 1; i < dp.length; i++) {
//     for (let j = 1; j < dp[0].length; j++) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//     }
//   }

//   return dp[m - 1][n - 1];
// };
