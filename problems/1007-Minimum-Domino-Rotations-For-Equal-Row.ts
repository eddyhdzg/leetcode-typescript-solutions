// TS
// Runtime: 104 ms, faster than 100.00% of TypeScript online submissions for Minimum Domino Rotations For Equal Row.
// Memory Usage: 49.1 MB, less than 25.00% of TypeScript online submissions for Minimum Domino Rotations For Equal Row.
function minDominoRotations(A: number[], B: number[]): number {
  const hash: { [key: string]: number } = {};
  for (let i = 1; i <= 6; i++) hash[i] = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      hash[A[i]]++;
      hash[B[i]]++;
    } else {
      hash[A[i]]++;
    }
  }

  const max = Math.max(...Object.values(hash));
  if (max !== A.length) {
    return -1;
  }

  let num = 0;
  for (let i = 1; i <= 6; i++) {
    if (hash[i] === max) {
      num = i;
    }
  }

  let swapsA = 0;
  let swapsB = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== num) {
      swapsA++;
    }
    if (B[i] !== num) {
      swapsB++;
    }
  }

  return Math.min(swapsA, swapsB);
}

// JS
// Runtime: 96 ms, faster than 83.23% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.
// Memory Usage: 48 MB, less than 9.32% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.
// var minDominoRotations = function (A, B) {
//   const hash = {};
//   for (let i = 1; i <= 6; i++) hash[i] = 0;

//   for (let i = 0; i < A.length; i++) {
//     if (A[i] !== B[i]) {
//       hash[A[i]]++;
//       hash[B[i]]++;
//     } else {
//       hash[A[i]]++;
//     }
//   }

//   const max = Math.max(...Object.values(hash));
//   if (max !== A.length) {
//     return -1;
//   }

//   let num = 0;
//   for (let i = 1; i <= 6; i++) {
//     if (hash[i] === max) {
//       num = i;
//     }
//   }

//   let swapsA = 0;
//   let swapsB = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] !== num) {
//       swapsA++;
//     }
//     if (B[i] !== num) {
//       swapsB++;
//     }
//   }

//   return Math.min(swapsA, swapsB);
// };
