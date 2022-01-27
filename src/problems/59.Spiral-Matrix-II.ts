function generateMatrix(n: number): number[][] {
  const res: number[][] = Array(n)
    .fill(null)
    .map(() => Array(n).fill(null));

  let rb = 0;
  let re = n - 1;
  let cb = 0;
  let ce = n - 1;

  let counter = 1;

  while (rb <= re && cb <= ce) {
    for (let i = cb; i <= ce; i++) {
      res[rb][i] = counter++;
    }
    rb++;

    for (let i = rb; i <= re; i++) {
      res[i][ce] = counter++;
    }
    ce--;

    if (rb <= re) {
      for (let i = ce; i >= cb; i--) {
        res[re][i] = counter++;
      }
    }
    re--;

    if (cb <= ce) {
      for (let i = re; i >= rb; i--) {
        res[i][cb] = counter++;
      }
    }
    cb++;
  }

  return res;
}
