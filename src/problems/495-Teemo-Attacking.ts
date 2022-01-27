// TS
// Runtime: 88 ms, faster than 75.00% of TypeScript online submissions for Teemo Attacking.
// Memory Usage: 43.1 MB, less than 25.00% of TypeScript online submissions for Teemo Attacking.
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  if (!timeSeries.length || duration <= 0) return 0;

  let res = duration;
  for (let i = 1; i < timeSeries.length; i++)
    res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
  return res;
}

// JS
// Runtime: 88 ms, faster than 42.22% of JavaScript online submissions for Teemo Attacking.
// Memory Usage: 43.2 MB, less than 8.89% of JavaScript online submissions for Teemo Attacking.
// function findPoisonedDuration(timeSeries: number[], duration: number): number {
//   if (!timeSeries.length || duration <= 0) return 0;

//   let res = duration;
//   for (let i = 1; i < timeSeries.length; i++)
//     res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
//   return res;
// }
