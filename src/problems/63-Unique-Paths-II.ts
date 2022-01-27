// TS
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const dp: number[][] = Array(obstacleGrid.length)
    .fill(null)
    .map(() => Array(obstacleGrid[0].length).fill(0));

  // Check if first item is i an obstacle
  if (!obstacleGrid[0][0]) dp[0][0] = 1;

  // First row path
  for (let i = 1; i < dp.length; i++)
    if (!obstacleGrid[i][0]) dp[i][0] = dp[i - 1][0];

  // First column path
  for (let j = 1; j < dp[0].length; j++)
    if (!obstacleGrid[0][j]) dp[0][j] = dp[0][j - 1];

  for (let i = 1; i < dp.length; i++)
    for (let j = 1; j < dp[0].length; j++)
      if (!obstacleGrid[i][j]) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

  return dp[dp.length - 1][dp[0].length - 1];
}

// JS
// var uniquePathsWithObstacles = function (obstacleGrid) {
//   const dp = Array(obstacleGrid.length)
//     .fill(null)
//     .map(() => Array(obstacleGrid[0].length).fill(0));

//   // Check if first item is i an obstacle
//   if (!obstacleGrid[0][0]) dp[0][0] = 1;

//   // First row path
//   for (let i = 1; i < dp.length; i++)
//     if (!obstacleGrid[i][0]) dp[i][0] = dp[i - 1][0];

//   // First column path
//   for (let j = 1; j < dp[0].length; j++)
//     if (!obstacleGrid[0][j]) dp[0][j] = dp[0][j - 1];

//   for (let i = 1; i < dp.length; i++)
//     for (let j = 1; j < dp[0].length; j++)
//       if (!obstacleGrid[i][j]) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

//   return dp[dp.length - 1][dp[0].length - 1];
// };
