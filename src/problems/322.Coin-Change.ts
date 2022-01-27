// TS
// Runtime: 112 ms, faster than 100.00% of TypeScript online submissions for Coin Change.
// Memory Usage: 43.7 MB, less than 76.71% of TypeScript online submissions for Coin Change.
function coinChange(coins: number[], amount: number): number {
  const dp: number[] = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}

// JS
// Runtime: 100 ms, faster than 98.33% of JavaScript online submissions for Coin Change.
// Memory Usage: 42.9 MB, less than 82.68% of JavaScript online submissions for Coin Change.
// var coinChange = function (coins, amount) {
//   const dp = Array(amount + 1).fill(amount + 1);
//   dp[0] = 0;

//   for (const coin of coins) {
//     for (let i = coin; i <= amount; i++) {
//       dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//     }
//   }

//   return dp[amount] > amount ? -1 : dp[amount];
// };
