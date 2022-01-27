const combinationSum4 = (nums: number[], target: number) => {
  const dp: number[] = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    nums.forEach((num) => {
      if (num <= i) {
        dp[i] += dp[i - num];
      }
    });
  }

  return dp[target];
};

// JS
// Runtime: 92 ms, faster than 26.11% of JavaScript online submissions for Combination Sum IV.
// Memory Usage: 38.2 MB, less than 48.33% of JavaScript online submissions for Combination Sum IV.
// var combinationSum4 = function (nums, target) {
//   const dp = new Array(target + 1).fill(0);
//   dp[0] = 1;

//   for (let i = 1; i <= target; i++) {
//     nums.forEach((num) => {
//       if (num <= i) {
//         dp[i] += dp[i - num];
//       }
//     });
//   }
//   return dp[target];
// };
