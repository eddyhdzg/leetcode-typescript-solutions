function checkPossibility(nums: number[]): boolean {
  let i = 0;
  let count = 0;

  while (i < nums.length - 1 && count < 2) {
    if (nums[i] > nums[i + 1]) {
      if (i > 0) {
        if (nums[i - 1] > nums[i + 1]) {
          nums[i + 1] = nums[i];
        }
      }
      count++;
    }
    i++;
  }

  return count < 2;
}
