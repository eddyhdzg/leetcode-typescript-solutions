const dirs: [number, number][] = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function maxAreaOfIsland(grid: number[][]): number {
  let res = 0;

  const sink = (x: number, y: number): number => {
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[0].length ||
      !grid[x][y]
    )
      return 0;

    grid[x][y] = 0;
    return dirs.reduce((prev, [a, b]) => prev + sink(a + x, b + y), 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) res = Math.max(res, sink(i, j));
    }
  }

  return res;
}
