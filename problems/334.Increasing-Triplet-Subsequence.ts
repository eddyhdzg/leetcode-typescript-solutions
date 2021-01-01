// TS
// Runtime: 88 ms, faster than 63.64% of TypeScript online submissions for Increasing Triplet Subsequence.
// Memory Usage: 40.3 MB, less than 63.64% of TypeScript online submissions for Increasing Triplet Subsequence.
function increasingTriplet(nums: number[]): boolean {
  let one = Infinity;
  let two = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= one) {
      one = nums[i];
    } else if (nums[i] <= two) {
      two = nums[i];
    } else {
      return true;
    }
  }

  return false;
}

// JS
// Runtime: 64 ms, faster than 99.66% of JavaScript online submissions for Increasing Triplet Subsequence.
// Memory Usage: 39 MB, less than 56.66% of JavaScript online submissions for Increasing Triplet Subsequence.
// var increasingTriplet = function (nums) {
//   let one = Infinity;
//   let two = Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] <= one) {
//       one = nums[i];
//     } else if (nums[i] <= two) {
//       two = nums[i];
//     } else {
//       return true;
//     }
//   }

//   return false;
// };
