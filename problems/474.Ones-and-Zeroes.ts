// TS
function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 0; i < strs.length; i++) {
    const [zeros, ones] = strs[i].split('').reduce(
      (acc, char) => {
        if (char === '0') return [acc[0] + 1, acc[1]];
        return [acc[0], acc[1] + 1];
      },
      [0, 0]
    );

    for (let j = m; j >= zeros; j--) {
      for (let k = n; k >= ones; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
      }
    }
  }

  return dp[m][n];
}

// JS
// var findMaxForm = function (strs, m, n) {
//   const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

//   for (let i = 0; i < strs.length; i++) {
//     const [zeros, ones] = strs[i].split('').reduce(
//       (acc, char) => {
//         if (char === '0') return [acc[0] + 1, acc[1]];
//         return [acc[0], acc[1] + 1];
//       },
//       [0, 0]
//     );

//     for (let j = m; j >= zeros; j--) {
//       for (let k = n; k >= ones; k--) {
//         dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
//       }
//     }
//   }

//   return dp[m][n];
// };
