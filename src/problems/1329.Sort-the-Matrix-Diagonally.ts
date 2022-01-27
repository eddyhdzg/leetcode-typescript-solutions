function diagonalSort(mat: number[][]): number[][] {
  const hash: { [key: string]: number[] } = {};
  const res: number[][] = Array(mat.length)
    .fill(null)
    .map(() => Array(mat[0].length));

  // Construct hash
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      const k = i - j;
      if (k in hash) hash[k].push(mat[i][j]);
      else hash[k] = [mat[i][j]];
    }
  }

  // Sort
  Object.keys(hash).forEach((key) => {
    hash[key].sort((a, b) => a - b);
  });

  // Construct sorder array
  Object.keys(hash).forEach((key) => {
    let i = 0;
    let j = 0;

    if (Number(key) < 0) {
      j += Math.abs(Number(key));
    }
    if (Number(key) > 0) {
      i += Number(key);
    }

    hash[key].forEach((val) => {
      res[i++][j++] = val;
    });
  });

  return res;
}
