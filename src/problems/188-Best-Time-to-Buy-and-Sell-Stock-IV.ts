// TS
// Runtime: 380 ms, faster than 16.67% of TypeScript online submissions for Best Time to Buy and Sell Stock IV.
// Memory Usage: 40.1 MB, less than 33.33% of TypeScript online submissions for Best Time to Buy and Sell Stock IV.
function maxProfit(k: number, prices: number[]): number {
  if (k === 0 || !prices.length) return 0;

  const dp: number[] = Array(prices.length).fill(0);
  const aux: number[] = Array(prices.length).fill(0);

  let j = k;

  while (j) {
    const flag = dp[dp.length - 1];

    for (let i = 0; i < prices.length; i++) {
      aux[i] = -(prices[i] - dp[i]);
    }

    let min = prices[0];
    let auxMax = aux[0];

    for (let i = 1; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      auxMax = Math.max(auxMax, aux[i]);
      dp[i] = Math.max(prices[i] - min, dp[i - 1], prices[i] + auxMax);
    }

    if (flag == dp[dp.length - 1]) {
      return dp[dp.length - 1];
    }

    j--;
  }

  return dp[dp.length - 1];
}

// JS
// Runtime: 392 ms, faster than 6.48% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
// Memory Usage: 40.3 MB, less than 5.56% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
// var maxProfit = function (k, prices) {
//   if (k === 0 || !prices.length) return 0;

//   const dp = Array(prices.length).fill(0);
//   const aux = Array(prices.length).fill(0);

//   let j = k;

//   while (j) {
//     const flag = dp[dp.length - 1];

//     // Generate Auxiliary array (check video for explanation)
//     for (let i = 0; i < prices.length; i++) {
//       aux[i] = -(prices[i] - dp[i]);
//     }

//     let min = prices[0];
//     let auxMax = aux[0];

//     for (let i = 1; i < prices.length; i++) {
//       min = Math.min(min, prices[i]);
//       auxMax = Math.max(auxMax, aux[i]);
//       dp[i] = Math.max(prices[i] - min, dp[i - 1], prices[i] + auxMax);
//     }

//     // If last value hasn't change, return
//     if (flag == dp[dp.length - 1]) {
//       return dp[dp.length - 1];
//     }

//     j--;
//   }

//   return dp[dp.length - 1];
// };
