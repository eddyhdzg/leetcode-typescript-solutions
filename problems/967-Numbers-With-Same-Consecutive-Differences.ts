// Runtime: 80 ms, faster than 89.83% of JavaScript online submissions for Numbers With Same Consecutive Differences.
// Memory Usage: 39 MB, less than 10.17% of JavaScript online submissions for Numbers With Same Consecutive Differences.

function numsSameConsecDiff(N: number, K: number): number[] {
  // return [0,1,2,3,4,5,6,7,8,9]
  if (N === 1)
    return Array(10)
      .fill(null)
      .map((_, i) => i);

  const res: number[] = [];

  const helper = (s: string) => {
    if (s.length === 0) {
      for (let i = 1; i <= 9; i++) helper(s + i);
    }

    if (s.length < N) {
      for (let i = 0; i <= 9; i++) {
        if (Math.abs(parseInt(s[s.length - 1]) - i) === K) helper(s + i);
      }
    }

    if (s.length === N) {
      if (Math.abs(parseInt(s[N - 1]) - parseInt(s[N - 2])) === K) {
        res.push(parseInt(s));
      }
    }
  };

  helper('');
  return res;
}
