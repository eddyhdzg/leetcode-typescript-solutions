// // TS
function findUnsortedSubarray(nums: number[]): number {
  const sorted = [...nums].sort((a, b) => a - b);

  let left = Infinity;
  let right = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sorted[i]) {
      left = Math.min(left, i);
      right = Math.max(right, i);
    }
  }

  return right ? right - left + 1 : 0;
}

// // JS
// var findUnsortedSubarray = function (nums) {
// const sorted = [...nums].sort((a, b) => a - b);

// let left = Infinity;
// let right = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== sorted[i]) {
//     left = Math.min(left, i);
//     right = Math.max(right, i);
//     }
// }

// return right ? right - left + 1 : 0;
// };
