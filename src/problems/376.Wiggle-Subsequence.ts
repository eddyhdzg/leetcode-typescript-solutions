function wiggleMaxLength(nums: number[]): number {
  let dp: number[] = Array(nums.length - 1).fill(null);

  for (let i = 0; i < dp.length; i++) {
    const curr = nums[i + 1] - nums[i];
    if (curr > 0) dp[i] = 1;
    else if (curr < 0) dp[i] = 0;
    else dp[i] = -1;
  }

  dp = dp.filter((num) => num !== -1);

  let i = 1;
  while (i < dp.length) {
    if (dp[i] === dp[i - 1]) dp.splice(i, 1);
    else i++;
  }

  return dp.length + 1;
}
