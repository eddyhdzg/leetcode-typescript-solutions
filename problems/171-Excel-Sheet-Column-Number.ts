// Runtime: 76 ms, faster than 98.09% of JavaScript online submissions for Excel Sheet Column Number.
// Memory Usage: 38.3 MB, less than 28.67% of JavaScript online submissions for Excel Sheet Column Number.

function titleToNumber(s: string): number {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res += (s.charCodeAt(i) - 64) * 26 ** (s.length - i - 1);
  }
  return res;
}
