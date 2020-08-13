// Runtime: 76 ms, faster than 48.80% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 36.9 MB, less than 5.69% of JavaScript online submissions for Pascal's Triangle.

function generate(numRows: number): number[][] {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const res: number[][] = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const aux = [];
    for (let j = 1; j < i; j++) {
      aux.push(res[i - 1][j - 1] + res[i - 1][j]);
    }
    res.push([1, ...aux, 1]);
  }

  return res;
}
