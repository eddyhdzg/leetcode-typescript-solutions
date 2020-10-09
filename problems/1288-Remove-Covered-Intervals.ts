// TS
// Runtime: 92 ms, faster than 50.00% of TypeScript online submissions for Remove Covered Intervals.
// Memory Usage: 41.1 MB, less than 50.00% of TypeScript online submissions for Remove Covered Intervals.
function removeCoveredIntervals(intervals: number[][]): number {
  intervals.sort(([a, b], [c, d]) => a - c || d - b);

  let res = 0;
  let end = Number.MIN_SAFE_INTEGER;

  intervals.forEach(([, b]) => {
    if (b > end) res++;

    end = Math.max(end, b);
  });

  return res;
}

// JS
// Runtime: 84 ms, faster than 83.33% of JavaScript online submissions for Remove Covered Intervals.
// Memory Usage: 40.5 MB, less than 40.00% of JavaScript online submissions for Remove Covered Intervals.

// var removeCoveredIntervals = function (intervals) {
//   intervals.sort(([a, b], [c, d]) => a - c || d - b);

//   let res = 0;
//   let end = Number.MIN_SAFE_INTEGER;

//   intervals.forEach(([, b]) => {
//     if (b > end) res++;

//     end = Math.max(end, b);
//   });

//   return res;
// };
