// TS
function countVowelStrings(n: number): number {
  const dp: number[][] = Array(n + 1)
    .fill(null)
    .map(() => Array(6).fill(0));

  for (let i = 1; i <= 5; i++) {
    dp[1][i] = i;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= 5; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[n][5];
}

countVowelStrings(5);

// // JS
// var countVowelStrings = function (n) {
//   const dp = Array(n + 1)
//     .fill(null)
//     .map(() => Array(6).fill(0));

//   for (let i = 1; i <= 5; i++) {
//     dp[1][i] = i;
//   }

//   for (let i = 2; i <= n; i++) {
//     for (let j = 1; j <= 5; j++) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//     }
//   }

//   return dp[n][5];
// };
