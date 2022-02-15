function singleNumber(nums: number[]): number {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) set.delete(nums[i]);
    else set.add(nums[i]);
  }

  return [...set.values()][0];
}
