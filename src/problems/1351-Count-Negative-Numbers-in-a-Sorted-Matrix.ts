// Iterative
// Runtime: 72 ms, faster than 78.31% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
// Memory Usage: 37.9 MB, less than 7.50% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.

function countNegatives(grid: number[][]): number {
  const total = grid.length * grid[0].length;
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][0] < 0) {
        i = grid.length;
        break;
      }

      if (grid[i][j] < 0) {
        break;
      }

      counter++;
    }
  }
  return total - counter;
}

// Binary Search
// Runtime: 76 ms, faster than 59.07% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
// Memory Usage: 38 MB, less than 5.00% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.

const searchFirstNegativeIndex = (arr: number[]) => {
  let r = arr.length - 1;
  let l = 0;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] < 0) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

function countNegatives(grid: number[][]): number {
  const count = grid.reduce((acc: number, row) => {
    const index = searchFirstNegativeIndex(row);
    return acc + row.length - index;
  }, 0);
  return count;
}
