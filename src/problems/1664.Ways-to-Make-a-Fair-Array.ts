function waysToMakeFair(nums: number[]): number {
  let evens = 0;
  let odds = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2) odds += nums[i];
    else evens += nums[i];
  }

  let prevEvens = 0;
  let prevOdds = 0;
  let postEvens = evens;
  let postOdds = odds;

  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2) postOdds -= nums[i];
    else postEvens -= nums[i];

    if (prevEvens + postOdds === prevOdds + postEvens) {
      res++;
    }

    if (i % 2) prevOdds += nums[i];
    else prevEvens += nums[i];
  }

  return res;
}

waysToMakeFair([2, 1, 6, 4]);
