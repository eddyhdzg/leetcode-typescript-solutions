// JS
// Runtime: 76 ms, faster than 97.36% of JavaScript online submissions for Missing Number.
// Memory Usage: 41.6 MB, less than 21.88% of JavaScript online submissions for Missing Number.
var missingNumber = function (nums) {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }

  return sum;
};

// TS
// Runtime: 84 ms, faster than 94.29% of TypeScript online submissions for Missing Number.
// Memory Usage: 41.4 MB, less than 39.29% of TypeScript online submissions for Missing Number.
function missingNumber(nums: number[]): number {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }

  return sum;
}
