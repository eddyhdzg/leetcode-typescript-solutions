// Runtime: 72 ms, faster than 63.17% of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 37.9 MB, less than 6.55% of JavaScript online submissions for Pascal's Triangle II.

function getRow(rowIndex: number): number[] {
  const res: number[][] = [[1], [1, 1]];
  for (let i = 2; i <= rowIndex; i++) {
    const aux: number[] = [];

    for (let j = 1; j < i; j++) {
      aux.push(res[i - 1][j - 1] + res[i - 1][j]);
    }

    res.push([1, ...aux, 1]);
  }

  return res[rowIndex];
}
