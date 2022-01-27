// TS
// Runtime: 100 ms, faster than 100.00% of TypeScript online submissions for Subarray Product Less Than K.
// Memory Usage: 47.6 MB, less than 12.50% of TypeScript online submissions for Subarray Product Less Than K.
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let left = 0;
  let right = 0;
  let prod = 1;
  let res = 0;

  while (right < nums.length) {
    prod *= nums[right];

    while (prod >= k && left < right) {
      prod /= nums[left];
      left++;
    }

    if (prod < k) {
      res += right - left + 1;
    }
    right++;
  }
  return res;
}
// JS
// Runtime: 112 ms, faster than 34.00% of JavaScript online submissions for Subarray Product Less Than K.
// Memory Usage: 47.7 MB, less than 5.00% of JavaScript online submissions for Subarray Product Less Than K.
// var numSubarrayProductLessThanK = function (nums, k) {
//   let left = 0;
//   let right = 0;
//   let prod = 1;
//   let res = 0;

//   while (right < nums.length) {
//     prod *= nums[right];

//     while (prod >= k && left < right) {
//       prod /= nums[left];
//       left++;
//     }

//     if (prod < k) {
//       res += right - left + 1;
//     }
//     right++;
//   }
//   return res;
// };
