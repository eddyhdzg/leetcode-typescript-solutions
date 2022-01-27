// TS
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Car Pooling.
// Memory Usage: 38.9 MB, less than 100.00% of TypeScript online submissions for Car Pooling.
function carPooling(trips: number[][], capacity: number): boolean {
  const lastLocation = trips.reduce((prev, [, , curr]) => {
    return Math.max(prev, curr);
  }, 0);

  const dp = Array(lastLocation).fill(0);

  trips.forEach(([num, start, end]) => {
    for (let i = start; i < end; i++) dp[i] += num;
  });

  return Math.max(...dp) <= capacity;
}

// JS
// Runtime: 72 ms, faster than 99.21% of JavaScript online submissions for Car Pooling.
// Memory Usage: 38.5 MB, less than 71.65% of JavaScript online submissions for Car Pooling.
// var carPooling = function (trips, capacity) {
//   const lastLocation = trips.reduce((prev, [, , curr]) => {
//     return Math.max(prev, curr);
//   }, 0);

//   const dp = Array(lastLocation).fill(0);

//   trips.forEach(([num, start, end]) => {
//     for (let i = start; i < end; i++) dp[i] += num;
//   });

//   return Math.max(...dp) <= capacity;
// };
