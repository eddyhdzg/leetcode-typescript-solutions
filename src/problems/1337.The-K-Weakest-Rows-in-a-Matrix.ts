function kWeakestRows(mat: number[][], k: number): number[] {
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < mat.length; i++) {
    hash[i] = 0;

    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j]) {
        hash[i]++;
      }
    }
  }

  return Object.entries(hash)
    .sort(([, b], [, d]) => b - d)
    .map(([a]) => Number(a))
    .splice(0, k);
}
