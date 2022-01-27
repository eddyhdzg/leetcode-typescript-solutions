// TS
// Runtime: 104 ms, faster than 66.67% of TypeScript online submissions for Insert Interval.
// Memory Usage: 42.6 MB, less than 33.33% of TypeScript online submissions for Insert Interval.
function insert(intervals: number[][], newInterval: number[]): number[][] {
  let i = 0;
  while (i < intervals.length) {
    const [a, b] = intervals[i];
    const [c, d] = newInterval;

    if (
      (a >= c && a <= d) ||
      (b >= c && b <= d) ||
      (c >= a && c <= b) ||
      (d >= a && d <= b)
    ) {
      newInterval = mergeIntervals(intervals[i], newInterval);
      intervals.splice(i, 1);
    } else {
      i++;
    }
  }

  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  return intervals;
}

const mergeIntervals = (int1: number[], int2: number[]) => [
  Math.min(int1[0], int2[0]),
  Math.max(int1[1], int2[1]),
];

// JS
// Runtime: 76 ms, faster than 97.07% of JavaScript online submissions for Insert Interval.
// Memory Usage: 40.1 MB, less than 12.94% of JavaScript online submissions for Insert Interval.
// var insert = function (intervals, newInterval) {
//     let i = 0;
//     while (i < intervals.length) {
//       const [a, b] = intervals[i];
//       const [c, d] = newInterval;

//       if (
//         (a >= c && a <= d) ||
//         (b >= c && b <= d) ||
//         (c >= a && c <= b) ||
//         (d >= a && d <= b)
//       ) {
//         newInterval = mergeIntervals(intervals[i], newInterval);
//         intervals.splice(i, 1);
//       } else {
//         i++;
//       }
//     }

//     intervals.push(newInterval);
//     intervals.sort((a, b) => a[0] - b[0]);

//     return intervals;
//   };

//   const mergeIntervals = (int1, int2) => [
//     Math.min(int1[0], int2[0]),
//     Math.max(int1[1], int2[1]),
//   ];
