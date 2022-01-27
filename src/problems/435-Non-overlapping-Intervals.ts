// Runtime: 96 ms, faster than 25.70% of JavaScript online submissions for Non-overlapping Intervals.
// Memory Usage: 38.7 MB, less than 22.09% of JavaScript online submissions for Non-overlapping Intervals.

function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length < 2) return 0;
  intervals.sort(([, a], [, b]) => a - b);
  let count = 0;
  let pervEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (pervEnd > intervals[i][0]) count++;
    else pervEnd = intervals[i][1];
  }
  return count;
}
