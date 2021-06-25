function numSubarrayBoundedMax(
  nums: number[],
  left: number,
  right: number
): number {
  let res = 0;
  let start = -1;
  let end = -1;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i] > right ? 'RESET' : nums[i] >= left ? 'NEEDED' : 'OK';

    switch (curr) {
      case 'OK':
        break;
      case 'NEEDED':
        end = i;
        break;
      case 'RESET':
        start = i;
        end = i;
        break;
    }

    res += end - start;
  }

  return res;
}
