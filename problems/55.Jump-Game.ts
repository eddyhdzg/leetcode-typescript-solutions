function canJump(nums: number[]): boolean {
  const dp = Array(nums.length).fill(false);
  dp[0] = true;

  let i = 0;
  let count = nums[0];
  while (i < nums.length && count > 0) {
    dp[i] = true;
    count = Math.max(--count, nums[i]);
    i++;
  }

  return dp[dp.length - 1];
}
