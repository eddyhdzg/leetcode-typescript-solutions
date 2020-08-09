// Runtime: 124 ms, faster than 61.36% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 44.1 MB, less than 7.69% of JavaScript online submissions for Squares of a Sorted Array.

function sortedSquares(A: number[]): number[] {
  return A.map((num) => num ** 2).sort((a, b) => a - b);
}
