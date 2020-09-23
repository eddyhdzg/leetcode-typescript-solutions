// TS
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Unique Paths III.
// Memory Usage: 39.2 MB, less than 100.00% of TypeScript online submissions for Unique Paths III.
function uniquePathsIII(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let zeros = 1;
  const start = [-1, -1];
  let res = 0;
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) zeros++;
      else if (grid[i][j] === 1) {
        start[0] = i;
        start[1] = j;
      }
    }
  }

  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] < 0) return;

    if (grid[i][j] === 2) return (res += Number(!zeros));

    grid[i][j] = -2;
    zeros--;

    directions.forEach(([ni, nj]) => dfs(i + ni, j + nj));

    grid[i][j] = 0;
    zeros++;
  };

  dfs(start[0], start[1]);

  return res;
}

// JS
// Runtime: 76 ms, faster than 87.50% of JavaScript online submissions for Unique Paths III.
// Memory Usage: 37.5 MB, less than 62.50% of JavaScript online submissions for Unique Paths III.
// var uniquePathsIII = function (grid) {
//   const m = grid.length;
//   const n = grid[0].length;
//   let zeros = 1;
//   const start = [-1, -1];
//   let res = 0;
//   const directions = [
//     [-1, 0],
//     [0, 1],
//     [1, 0],
//     [0, -1],
//   ];

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] === 0) zeros++;
//       else if (grid[i][j] === 1) {
//         start[0] = i;
//         start[1] = j;
//       }
//     }
//   }

//   const dfs = (i, j) => {
//     if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] < 0) return;

//     if (grid[i][j] === 2) return (res += Number(!zeros));

//     grid[i][j] = -2;
//     zeros--;

//     directions.forEach(([ni, nj]) => dfs(i + ni, j + nj));

//     grid[i][j] = 0;
//     zeros++;
//   };

//   dfs(start[0], start[1]);

//   return res;
// };
