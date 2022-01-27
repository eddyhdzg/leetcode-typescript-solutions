// Recursion
// function fib(n: number): number {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// DP
function fib(n: number): number {
  const dp = Array(n + 1).fill(null);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
