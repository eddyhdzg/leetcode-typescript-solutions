// TS
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Count Servers that Communicate.
// Memory Usage: 41.2 MB, less than 100.00% of TypeScript online submissions for Count Servers that Communicate.

function countServers(grid: number[][]): number {
  const hasCommunication = (x: number, y: number): 1 | 0 => {
    // Check Y Axis
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][y] && x !== i) {
        return 1;
      }
    }

    // Check X Axis
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[x][j] && y !== j) {
        return 1;
      }
    }

    return 0;
  };

  let ans = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        ans += hasCommunication(i, j);
      }
    }
  }

  return ans;
}

// JS
// Runtime: 88 ms, faster than 76.00% of JavaScript online submissions for Count Servers that Communicate.
// Memory Usage: 40.2 MB, less than 72.00% of JavaScript online submissions for Count Servers that Communicate.
const countServers = function (grid) {
  const hasCommunication = (x, y) => {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][y] && x !== i) {
        return 1;
      }
    }

    for (let j = 0; j < grid[0].length; j++) {
      if (grid[x][j] && y !== j) {
        return 1;
      }
    }
    return 0;
  };
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        ans += hasCommunication(i, j);
      }
    }
  }
  return ans;
};
