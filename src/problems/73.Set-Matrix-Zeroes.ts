function setZeroes(matrix: number[][]): void {
  const rows: Set<number> = new Set([]);
  const columns: Set<number> = new Set([]);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j]) {
        rows.add(i);
        columns.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows.has(i) || columns.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}
