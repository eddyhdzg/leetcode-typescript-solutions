function countBits(num: number): number[] {
  const bits = Array(num + 1)
    .fill(null)
    .map((_, i) => i.toString(2).replace(/0/g, '').length);

  return bits;
}
