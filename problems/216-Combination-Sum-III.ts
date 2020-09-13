// JS
// Runtime: 72 ms, faster than 83.41% of JavaScript online submissions for Combination Sum III.
// Memory Usage: 38.6 MB, less than 14.41% of JavaScript online submissions for Combination Sum III.
var combinationSum3 = function (k, n) {
  const nums = [...Array(9).keys()].map((i) => i + 1);
  const res = [];

  const combinationSum3Helper = (combs = [], sum = 0, idx = 0) => {
    if (sum === n && combs.length === k) res.push(combs);
    if (sum < n && combs.length < k) {
      for (let i = idx; i < 9; i++) {
        combinationSum3Helper([...combs, nums[i]], sum + nums[i], i + 1);
      }
    }
  };

  combinationSum3Helper();

  return res;
};

// TS
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Combination Sum III.
// Memory Usage: 39 MB, less than 50.00% of TypeScript online submissions for Combination Sum III.

function combinationSum3(k: number, n: number): number[][] {
  const nums = [...Array(9).keys()].map((i) => i + 1);
  const res: number[][] = [];

  const combinationSum3Helper = (
    combs: number[] = [],
    sum: number = 0,
    idx: number = 0
  ) => {
    if (sum === n && combs.length === k) res.push(combs);
    if (sum < n && combs.length < k) {
      for (let i = idx; i < 9; i++) {
        combinationSum3Helper([...combs, nums[i]], sum + nums[i], i + 1);
      }
    }
  };

  combinationSum3Helper();

  return res;
}
