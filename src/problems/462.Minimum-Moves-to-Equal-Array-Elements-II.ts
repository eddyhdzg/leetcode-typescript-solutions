function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  const median = nums.length % 2 ? nums[mid] : (nums[mid] + nums[mid - 1]) / 2;
  let steps = 0;
  for (const num of nums) {
    steps += Math.abs(num - median);
  }

  return steps;
}
