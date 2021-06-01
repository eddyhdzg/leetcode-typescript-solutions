function findBall(grid: number[][]): number[] {
  const m = grid.length;
  const n = grid[0].length;
  const res: number[] = [];
  for (let start = 0; start < n; start++) {
    let j = start;
    for (let i = 0; i < m; i++) {
      const dir = grid[i][j];
      if (dir === grid[i][j + dir]) j += dir;
      else {
        i = m;
        j = -1;
      }
    }
    res[start] = j;
  }
  return res;
}
