// TS
function merge(intervals: number[][]): number[][] {
  intervals.sort(([a], [c]) => a - c);

  let i = 1;

  while (i < intervals.length) {
    const [a, b] = intervals[i - 1];
    const [c, d] = intervals[i];

    if (b >= c) intervals.splice(i - 1, 2, [a, Math.max(b, d)]);
    else i++;
  }

  return intervals;
}

// JS
// var merge = function (intervals) {
//   intervals.sort(([a], [c]) => a - c);

//   let i = 1;

//   while (i < intervals.length) {
//     const [a, b] = intervals[i - 1];
//     const [c, d] = intervals[i];

//     if (b >= c) intervals.splice(i - 1, 2, [a, Math.max(b, d)]);
//     else i++;
//   }

//   return intervals;
// };
