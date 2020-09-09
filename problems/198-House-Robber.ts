// Runtime: 72 ms, faster than 78.83% of JavaScript online submissions for House Robber.
// Memory Usage: 36.9 MB, less than 11.01% of JavaScript online submissions for House Robber.
function rob(nums: number[]): number {
  for (let i = 2; i < nums.length; i++) {
    const prevHouses = nums.slice(0, i - 1);
    nums[i] += Math.max(...prevHouses);
  }

  return nums.length ? Math.max(...nums) : 0;
}
