// Binary Search
// Runtime: 56 ms, faster than 99.69% of JavaScript online submissions for Peak Index in a Mountain Array.
// Memory Usage: 37.5 MB, less than 5.88% of JavaScript online submissions for Peak Index in a Mountain Array

function peakIndexInMountainArray(A: number[]): number {
  let right = A.length - 1;
  let left = 0;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (A[mid] < A[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

// Math.max()
// Runtime: 68 ms, faster than 84.05% of JavaScript online submissions for Peak Index in a Mountain Array.
// Memory Usage: 37.7 MB, less than 5.88% of JavaScript online submissions for Peak Index in a Mountain Array.

function peakIndexInMountainArray(A: number[]): number {
  return A.indexOf(Math.max(...A));
}
