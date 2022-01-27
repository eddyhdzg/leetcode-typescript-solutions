// Runtime: 88 ms, faster than 44.97% of JavaScript online submissions for Max Consecutive Ones.
// Memory Usage: 39.3 MB, less than 37.76% of JavaScript online submissions for Max Consecutive Ones.

function findMaxConsecutiveOnes(nums: number[]): number {
  let res = 0;
  let aux = 0;

  nums.forEach((num) => {
    if (num) {
      aux++;
    } else {
      res = Math.max(res, aux);
      aux = 0;
    }
  });
  res = Math.max(res, aux);

  return res;
}
