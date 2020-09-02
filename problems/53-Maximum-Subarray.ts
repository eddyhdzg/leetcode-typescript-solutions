// Runtime: 76 ms, faster than 87.39% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 37.8 MB, less than 19.68% of JavaScript online submissions for Maximum Subarray.

function maxSubArray(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
    }
  }

  return Math.max(...nums);
}
