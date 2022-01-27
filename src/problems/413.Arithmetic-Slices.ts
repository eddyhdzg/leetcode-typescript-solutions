// TS
// Runtime: 84 ms, faster than 83.33% of TypeScript online submissions for Arithmetic Slices.
// Memory Usage: 39.4 MB, less than 50.00% of TypeScript online submissions for Arithmetic Slices.
function numberOfArithmeticSlices(A: number[]): number {
  const difs: number[] = Array(A.length).fill(0);
  const dp: number[] = Array(A.length).fill(0);

  for (let i = 1; i < A.length; i++) {
    difs[i] = A[i] - A[i - 1];
  }

  for (let i = 2; i < A.length; i++) {
    if (difs[i] === difs[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return dp.reduce((acc, curr) => acc + curr, 0);
}

// JS
// Runtime: 72 ms, faster than 89.58% of JavaScript online submissions for Arithmetic Slices.
// Memory Usage: 38.7 MB, less than 31.25% of JavaScript online submissions for Arithmetic Slices.
// var numberOfArithmeticSlices = function (A) {
//     const difs = Array(A.length).fill(0);
//     const dp = Array(A.length).fill(0);

//     for (let i = 1; i < A.length; i++) {
//       difs[i] = A[i] - A[i - 1];
//     }

//     for (let i = 2; i < A.length; i++) {
//       if (difs[i] === difs[i - 1]) {
//         dp[i] = dp[i - 1] + 1;
//       }
//     }

//     return dp.reduce((acc, curr) => acc + curr, 0);
//   };
