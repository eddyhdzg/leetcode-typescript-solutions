// TS
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Jump Game III.
// Memory Usage: 43.9 MB, less than 100.00% of TypeScript online submissions for Jump Game III.
function canReach(arr: number[], start: number): boolean {
  const visited = new Set<number>();
  const stack: number[] = [start];

  while (stack.length) {
    const currIndex = stack.shift()!;
    const currValue = arr[currIndex];

    if (currValue === 0) return true;

    if (!visited.has(currIndex)) {
      visited.add(currIndex);

      const rightJump = currIndex + currValue;
      const leftJump = currIndex - currValue;

      if (!visited.has(leftJump) && leftJump >= 0) {
        stack.push(leftJump);
      }
      if (!visited.has(rightJump) && rightJump < arr.length) {
        stack.push(rightJump);
      }
    }
  }

  return false;
}

// JS
// Runtime: 80 ms, faster than 71.50% of JavaScript online submissions for Jump Game III.
// Memory Usage: 43.2 MB, less than 5.00% of JavaScript online submissions for Jump Game III.
// var canReach = function (arr, start) {
//   const visited = new Set();
//   const stack = [start];

//   while (stack.length) {
//     const currIndex = stack.shift();
//     const currValue = arr[currIndex];

//     if (currValue === 0) return true;

//     if (!visited.has(currIndex)) {
//       visited.add(currIndex);

//       const rightJump = currIndex + currValue;
//       const leftJump = currIndex - currValue;

//       if (!visited.has(leftJump) && leftJump >= 0) {
//         stack.push(leftJump);
//       }
//       if (!visited.has(rightJump) && rightJump < arr.length) {
//         stack.push(rightJump);
//       }
//     }
//   }

//   return false;
// };
