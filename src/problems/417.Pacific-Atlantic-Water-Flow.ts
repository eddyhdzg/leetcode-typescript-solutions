const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function pacificAtlantic(matrix: number[][]): number[][] {
  const res: number[][] = [];
  if (!matrix.length || !matrix[0].length) return res;
  const row: number = matrix.length;
  const col: number = matrix[0].length;

  const pacific: boolean[][] = Array(row)
    .fill(null)
    .map(() => Array(col));

  const atlantic: boolean[][] = Array(row)
    .fill(null)
    .map(() => Array(col));

  for (let i = 0; i < col; i++) {
    dfs(matrix, 0, i, Number.MIN_SAFE_INTEGER, pacific);
    dfs(matrix, row - 1, i, Number.MIN_SAFE_INTEGER, atlantic);
  }
  for (let i = 0; i < row; i++) {
    dfs(matrix, i, 0, Number.MIN_SAFE_INTEGER, pacific);
    dfs(matrix, i, col - 1, Number.MIN_SAFE_INTEGER, atlantic);
  }

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[0].length; j++)
      if (pacific[i][j] && atlantic[i][j]) res.push([i, j]);

  return res;
}

const dfs = (
  matrix: number[][],
  i: number,
  j: number,
  prev: number,
  ocean: boolean[][]
) => {
  if (i < 0 || i >= ocean.length || j < 0 || j >= ocean[0].length) return;
  if (matrix[i][j] < prev || ocean[i][j]) return;
  ocean[i][j] = true;
  directions.forEach(([ni, nj]) => {
    dfs(matrix, i + ni, j + nj, matrix[i][j], ocean);
  });
};
