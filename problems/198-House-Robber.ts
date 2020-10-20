// TS
// Runtime: 84 ms, faster than 58.44% of TypeScript online submissions for House Robber.
// Memory Usage: 39 MB, less than 5.19% of TypeScript online submissions for House Robber.
function rob(nums: number[]): number {
  if (!nums.length) return 0;
  if (nums.length <= 2) return Math.max(...nums);

  const dp: number[] = Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[nums.length - 1];
}

// JS
// Runtime: 72 ms, faster than 85.25% of JavaScript online submissions for House Robber.
// Memory Usage: 38.5 MB, less than 12.42% of JavaScript online submissions for House Robber.
// var rob = function (nums) {
//   if (!nums.length) return 0;
//   if (nums.length <= 2) return Math.max(...nums);

//   const dp = Array(nums.length).fill(0);
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1]);

//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
//   }

//   return dp[nums.length - 1];
// };

// Runtime: 72 ms, faster than 78.83% of JavaScript online submissions for House Robber.
// Memory Usage: 36.9 MB, less than 11.01% of JavaScript online submissions for House Robber.
// function rob(nums: number[]): number {
//   for (let i = 2; i < nums.length; i++) {
//     const prevHouses = nums.slice(0, i - 1);
//     nums[i] += Math.max(...prevHouses);
//   }

//   return nums.length ? Math.max(...nums) : 0;
// }
