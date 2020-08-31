// JS
// Runtime: 92 ms, faster than 56.94% of JavaScript online submissions for Pancake Sorting.
// Memory Usage: 41.3 MB, less than 22.22% of JavaScript online submissions for Pancake Sorting.
var pancakeSort = function (A) {
  const sorted = [...A].sort((a, b) => a - b);
  const res = [];

  const flip = (currPos, nextPos) => {
    const flip1 = A.splice(0, currPos + 1);
    flip1.reverse();
    const nextRemoved = A.splice(0, nextPos - currPos);
    const flip2 = [...flip1, ...nextRemoved].reverse();
    A = [...flip2, ...A];
    res.push(currPos + 1, nextPos + 1);
  };

  for (let i = sorted.length - 1; i >= 0; i--) {
    if (A[i] !== sorted[i]) {
      flip(A.indexOf(sorted[i]), i);
    }
  }

  return res;
};

// TS
// Runtime: 92 ms, faster than 100.00% of TypeScript online submissions for Pancake Sorting.
// Memory Usage: 41.4 MB, less than 50.00% of TypeScript online submissions for Pancake Sorting.
function pancakeSort(A: number[]): number[] {
  const sorted = [...A].sort((a, b) => a - b);
  const res: number[] = [];

  const flip = (currPos: number, nextPos: number) => {
    const flip1 = A.splice(0, currPos + 1);
    flip1.reverse();
    const nextRemoved = A.splice(0, nextPos - currPos);
    const flip2 = [...flip1, ...nextRemoved].reverse();
    A = [...flip2, ...A];
    res.push(currPos + 1, nextPos + 1);
  };

  for (let i = sorted.length - 1; i >= 0; i--) {
    if (A[i] !== sorted[i]) {
      flip(A.indexOf(sorted[i]), i);
    }
  }

  return res;
}
