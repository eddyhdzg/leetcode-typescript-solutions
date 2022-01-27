// Runtime: 108 ms, faster than 80.05% of JavaScript online submissions for Find the Town Judge.
// Memory Usage: 44.2 MB, less than 86.62% of JavaScript online submissions for Find the Town Judge.
function findJudge(N: number, trust: number[][]): number {
  const array: number[] = new Array(N).fill(0);

  trust.forEach(([a, b]) => {
    array[a - 1]++;
    array[b - 1]--;
  });

  const index = array.indexOf(-(N - 1));
  return index !== -1 ? index + 1 : index;
}
