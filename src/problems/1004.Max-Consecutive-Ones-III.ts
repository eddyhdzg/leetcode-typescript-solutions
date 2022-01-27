function longestOnes(nums: number[], k: number): number {
  let right = 0;
  let left = 0;
  let res = 0;

  while (right < nums.length) {
    if (nums[right] === 0) k--;
    if (k < 0 && nums[left++] === 0) k++;
    right++;
    res = Math.max(res, right - left);
  }

  return res;
}
