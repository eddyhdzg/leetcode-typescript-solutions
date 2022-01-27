// TS
// Runtime: 80 ms, faster than 82.43% of TypeScript online submissions for First Missing Positive.
// Memory Usage: 40.5 MB, less than 8.11% of TypeScript online submissions for First Missing Positive.
function firstMissingPositive(nums: number[]): number {
  const set = new Set(nums);
  let res = 1;
  while (set.has(res)) res++;
  return res;
}

// JS
// Runtime: 80 ms, faster than 57.95% of JavaScript online submissions for First Missing Positive.
// Memory Usage: 39 MB, less than 10.61% of JavaScript online submissions for First Missing Positive.
// var firstMissingPositive = function (nums) {
//     const set = new Set(nums);
//     let res = 1;
//     while (set.has(res)) res++;
//     return res;
//   };
