// TS
// Runtime: 108 ms, faster than 100.00% of TypeScript online submissions for Champagne Tower.
// Memory Usage: 46.2 MB, less than 50.00% of TypeScript online submissions for Champagne Tower.
function champagneTower(
  poured: number,
  query_row: number,
  query_glass: number
): number {
  const dp: number[][] = Array(query_row + 2)
    .fill(null)
    .map(() => Array(query_row + 2).fill(0));

  dp[0][0] = poured;

  for (let i = 0; i <= query_row; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[i][j] > 1) {
        const excess = dp[i][j] - 1;
        dp[i + 1][j] += excess / 2;
        dp[i + 1][j + 1] += excess / 2;
      }
    }
  }

  return dp[query_row][query_glass] <= 1 ? dp[query_row][query_glass] : 1;
}

// JS
// Runtime: 96 ms, faster than 64.29% of JavaScript online submissions for Champagne Tower.
// Memory Usage: 46 MB, less than 7.14% of JavaScript online submissions for Champagne Tower.
// var champagneTower = function (poured, query_row, query_glass) {
//   const dp = Array(query_row + 2)
//     .fill(null)
//     .map(() => Array(query_row + 2).fill(0));

//   dp[0][0] = poured;

//   for (let i = 0; i <= query_row; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (dp[i][j] > 1) {
//         const excess = dp[i][j] - 1;
//         dp[i + 1][j] += excess / 2;
//         dp[i + 1][j + 1] += excess / 2;
//       }
//     }
//   }

//   return dp[query_row][query_glass] <= 1 ? dp[query_row][query_glass] : 1;
// };
