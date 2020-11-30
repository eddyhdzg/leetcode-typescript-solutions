// TS
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Jump Game III.
// Memory Usage: 43.9 MB, less than 100.00% of TypeScript online submissions for Jump Game III.
function canReach(arr: number[], start: number): boolean {
  const visited = new Set<number>();
  const stack = [start];

  while (stack.length) {
    const curr = stack.shift()!;

    if (arr[curr] === 0) {
      return true;
    }

    visited.add(curr);

    const left = curr - arr[curr];
    const right = curr + arr[curr];

    if (left >= 0 && !visited.has(left)) {
      stack.push(left);
    }

    if (right < arr.length && !visited.has(right)) {
      stack.push(right);
    }
  }

  return false;
}
