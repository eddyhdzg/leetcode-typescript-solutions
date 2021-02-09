function kLengthApart(nums: number[], k: number): boolean {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (count < k) return false;
      count = 0;
    } else count++;
  }

  return true;
}
