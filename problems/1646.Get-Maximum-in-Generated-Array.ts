function getMaximumGenerated(n: number): number {
  if (n <= 1) return n;

  const dp: number[] = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (i % 2) {
      const j = Math.floor(i / 2);
      dp[i] = dp[j] + dp[j + 1];
    } else {
      dp[i] = dp[i / 2];
    }
  }

  return Math.max(...dp);
}
