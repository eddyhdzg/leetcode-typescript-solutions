// TS
// Runtime: 72 ms, faster than 100.00% of TypeScript online submissions for The kth Factor of n.
// Memory Usage: 40.2 MB, less than 100.00% of TypeScript online submissions for The kth Factor of n.
function kthFactor(n: number, k: number): number {
  const factors: number[] = [1];

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  factors.push(n);

  return factors.length > k - 1 ? factors[k - 1] : -1;
}

//  JS
// Runtime: 72 ms, faster than 98.21% of JavaScript online submissions for The kth Factor of n.
// Memory Usage: 38.7 MB, less than 42.86% of JavaScript online submissions for The kth Factor of n.
// var kthFactor = function (n, k) {
//   const factors = [1];

//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) {
//       factors.push(i);
//     }
//   }

//   factors.push(n);

//   return factors.length > k - 1 ? factors[k - 1] : -1;
// };
