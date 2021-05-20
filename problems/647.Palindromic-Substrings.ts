function countSubstrings(s: string): number {
  const n = s.length;
  const dp: boolean[][] = Array(n)
    .fill(null)
    .map(() => Array(n));
  let res = 0;

  for (let i = 0; i < n; i++, res++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < n; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      res++;
    }
  }

  for (let len = 3; len <= s.length; len++) {
    for (let i = 0, j = i + len - 1; j < s.length; i++, j++) {
      dp[i][j] = dp[i + 1][j - 1] && s.charAt(i) == s.charAt(j);
      if (dp[i][j]) res++;
    }
  }

  return res;
}
