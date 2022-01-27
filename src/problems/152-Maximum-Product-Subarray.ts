// TS
// Runtime: 80 ms, faster than 90.91% of TypeScript online submissions for Maximum Product Subarray.
// Memory Usage: 38.8 MB, less than 54.54% of TypeScript online submissions for Maximum Product Subarray.
function maxProduct(nums: number[]): number {
  let currMax = nums[0];
  let currMin = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const tempMax = currMax;

    currMax = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin);
    currMin = Math.min(nums[i], nums[i] * currMin, nums[i] * tempMax);
    res = Math.max(res, currMax);
  }

  return res;
}
// JS
// Runtime: 88 ms, faster than 48.23% of JavaScript online submissions for Maximum Product Subarray.
// Memory Usage: 37.4 MB, less than 39.01% of JavaScript online submissions for Maximum Product Subarray.
// const maxProduct = function (nums) {
//   let currMax = nums[0];
//   let currMin = nums[0];
//   let res = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     const tempMax = currMax;

//     currMax = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin);
//     currMin = Math.min(nums[i], nums[i] * currMin, nums[i] * tempMax);
//     res = Math.max(res, currMax);
//   }

//   return res;
// };
