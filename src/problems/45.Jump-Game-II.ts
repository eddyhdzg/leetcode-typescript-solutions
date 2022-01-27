function jump(nums: number[]): number {
  const dp = Array(nums.length).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length && j <= i + nums[i]; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }

  return dp[dp.length - 1];
}
