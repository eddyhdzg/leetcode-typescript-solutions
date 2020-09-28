// TS
// Runtime: 84 ms, faster than 87.50% of TypeScript online submissions for Largest Number.
// Memory Usage: 40.5 MB, less than 12.50% of TypeScript online submissions for Largest Number.
function largestNumber(nums: number[]): string {
  const res = nums
    .map((n) => n.toString())
    .sort((a, b) => {
      return a.concat(b) > b.concat(a) ? -1 : 1;
    })
    .join('');

  return res.charAt(0) === '0' ? '0' : res;
}

// JS
// Runtime: 88 ms, faster than 51.58% of JavaScript online submissions for Largest Number.
// Memory Usage: 40.9 MB, less than 12.63% of JavaScript online submissions for Largest Number.
// var largestNumber = function (nums) {
//   const res = nums
//     .map((n) => n.toString())
//     .sort((a, b) => {
//       return a.concat(b) > b.concat(a) ? -1 : 1;
//     })
//     .join('');

//   return res.charAt(0) === '0' ? '0' : res;
// };
