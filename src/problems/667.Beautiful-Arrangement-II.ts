function constructArray(n: number, k: number): number[] {
  let res = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = 1; i < k; i++) {
    const x = res.slice(0, i);
    const y = res.slice(i);
    res = [...x, ...y.reverse()];
  }
  return res;
}
