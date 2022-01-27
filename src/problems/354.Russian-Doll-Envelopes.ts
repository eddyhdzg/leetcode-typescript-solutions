function maxEnvelopes(envelopes: number[][]): number {
  if (!envelopes.length) return 0;
  envelopes.sort(([a, b], [c, d]) => a - c || d - b);
  const dp = Array(envelopes.length).fill(1);

  for (let i = 1; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (
        envelopes[j][0] < envelopes[i][0] &&
        envelopes[j][1] < envelopes[i][1]
      ) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
