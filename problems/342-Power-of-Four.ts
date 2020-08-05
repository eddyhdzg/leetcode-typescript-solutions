// Iteration
// Runtime: 92 ms, faster than 58.82% of JavaScript online submissions for Power of Four.
// Memory Usage: 38.2 MB, less than 14.29% of JavaScript online submissions for Power of Four.

function isPowerOfFour(num: number, x = 1): boolean {
  while (x < num) x *= 4;
  return x === num;
}

// Regex
// Runtime: 100 ms, faster than 39.10% of JavaScript online submissions for Power of Four.
// Memory Usage: 37.8 MB, less than 14.29% of JavaScript online submissions for Power of Four.

function isPowerOfFour(num: number): boolean {
  return /^1(00)*$/.test(num.toString(2));
}
