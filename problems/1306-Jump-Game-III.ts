// Runtime: 80 ms, faster than 67.91% of JavaScript online submissions for Jump Game III.
// Memory Usage: 40.8 MB, less than 67.38% of JavaScript online submissions for Jump Game III.

function canReach(arr: number[], start: number): boolean {
  if (start < 0 || start >= arr.length || arr[start] === -1) return false;
  if (arr[start] === 0) return true;

  const left = start - arr[start];
  const right = start + arr[start];
  arr[start] = -1;

  return canReach(arr, left) || canReach(arr, right);
}
