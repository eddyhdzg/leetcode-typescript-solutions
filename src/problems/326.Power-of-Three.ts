function isPowerOfThree(n: number): boolean {
  let num = 1;
  while (num < n) num *= 3;
  return num === n;
}
