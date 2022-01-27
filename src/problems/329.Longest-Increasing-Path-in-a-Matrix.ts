const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function longestIncreasingPath(matrix: number[][]): number {
  if (!matrix.length || !matrix[0].length) return 0;

  const dp = Array(matrix.length)
    .fill(null)
    .map(() => Array(matrix[0].length).fill(1));

  const dfs = (i: number, j: number, max: number, path: number) => {
    if (
      i < 0 ||
      i >= matrix.length ||
      j < 0 ||
      j >= matrix[0].length ||
      matrix[i][j] <= max ||
      path < dp[i][j]
    ) {
      return;
    }

    dp[i][j] = path;
    directions.forEach(([x, y]) => dfs(i + x, j + y, matrix[i][j], path + 1));
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      dfs(i, j, Number.MIN_SAFE_INTEGER, 1);
    }
  }

  let res = 1;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      res = Math.max(res, dp[i][j]);
    }
  }

  return res;
}
