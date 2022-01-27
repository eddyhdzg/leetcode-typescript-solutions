// TS
// Runtime: 168 ms, faster than 15.32% of JavaScript online submissions for Count Square Submatrices with All Ones.
// Memory Usage: 41 MB, less than 45.95% of JavaScript online submissions for Count Square Submatrices with All Ones.

// JS
// Runtime: 96 ms, faster than 83.33% of TypeScript online submissions for Count Square Submatrices with All Ones.
// Memory Usage: 42.1 MB, less than 16.67% of TypeScript online submissions for Count Square Submatrices with All Ones.

function countSquares(matrix: number[][]): number {
  let res = 0;

  const checkSquare = (i: number, j: number) => {
    const a = matrix[i - 1][j - 1];
    const b = matrix[i][j - 1];
    const c = matrix[i - 1][j];

    if (a && b && c) {
      matrix[i][j] += Math.min(a, b, c);
    }
  };

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j]) checkSquare(i, j);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        res += matrix[i][j];
      }
    }
  }

  return res;
}
