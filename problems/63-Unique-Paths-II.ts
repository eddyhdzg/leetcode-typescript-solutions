// TS
// Runtime: 84 ms, faster than 45.45% of TypeScript online submissions for Unique Paths II.
// Memory Usage: 38.3 MB, less than 18.18% of TypeScript online submissions for Unique Paths II.

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp: number[][] = Array(m)
    .fill(null)
    .map(() => Array(n));

  if (obstacleGrid[0][0]) dp[0][0] = 0;
  else dp[0][0] = 1;

  for (let i = 1; i < dp.length; i++) {
    if (obstacleGrid[i][0]) dp[i][0] = 0;
    else dp[i][0] = dp[i - 1][0];
  }

  for (let j = 1; j < dp[0].length; j++) {
    if (obstacleGrid[0][j]) dp[0][j] = 0;
    else dp[0][j] = dp[0][j - 1];
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (obstacleGrid[i][j]) dp[i][j] = 0;
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// JS
// Runtime: 92 ms, faster than 32.61% of JavaScript online submissions for Unique Paths II.
// Memory Usage: 37.4 MB, less than 55.20% of JavaScript online submissions for Unique Paths II.

// var uniquePathsWithObstacles = function (obstacleGrid) {
//     const m = obstacleGrid.length;
//     const n = obstacleGrid[0].length;

//     const dp = Array(m)
//       .fill(null)
//       .map(() => Array(n));

//     // Check if first item is i an obstacle
//     if (obstacleGrid[0][0]) dp[0][0] = 0;
//     else dp[0][0] = 1;

//     // First row path
//     for (let i = 1; i < dp.length; i++) {
//       if (obstacleGrid[i][0]) dp[i][0] = 0;
//       else dp[i][0] = dp[i - 1][0];
//     }

//     // First column path
//     for (let j = 1; j < dp[0].length; j++) {
//       if (obstacleGrid[0][j]) dp[0][j] = 0;
//       else dp[0][j] = dp[0][j - 1];
//     }

//     for (let i = 1; i < dp.length; i++) {
//       for (let j = 1; j < dp[0].length; j++) {
//         if (obstacleGrid[i][j]) dp[i][j] = 0;
//         else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//       }
//     }

//     return dp[m - 1][n - 1];
//   };
