// Iterative
// Runtime: 72 ms, faster than 64.25% of JavaScript online submissions for H-Index.
// Memory Usage: 36.9 MB, less than 17.87% of JavaScript online submissions for H-Index.
function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a);

  let h = 0;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) {
      return h;
    }

    h = i + 1;
  }

  return h;
}

// Binary Search
// Runtime: 72 ms, faster than 64.25% of JavaScript online submissions for H-Index.
// Memory Usage: 36.9 MB, less than 17.87% of JavaScript online submissions for H-Index.
function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a);

  let l = 0;
  let r = citations.length - 1;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (citations[mid] === mid + 1) return mid + 1;
    if (citations[mid] > mid) l = mid + 1;
    else r = mid;
  }

  return l;
}
