// // TS
// // 0(n^2)
// function isIdealPermutation(A: number[]): boolean {
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 2; j < A.length; j++) {
//       if (A[i] > A[j]) return false;
//     }
//   }

//   return true;
// }

// // 0(n)
function isIdealPermutation(A: number[]): boolean {
  let max = -1;
  for (let i = 0; i < A.length - 2; i++) {
    max = Math.max(max, A[i]);
    if (max > A[i + 2]) return false;
  }

  return true;
}

// // JS
// // 0(n^2)
// var isIdealPermutation = function (A) {
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 2; j < A.length; j++) {
//       if (A[i] > A[j]) return false;
//     }
//   }

//   return true;
// };

// // 0(n)
// var isIdealPermutation = function (A) {
//   let max = -1;
//   for (let i = 0; i < A.length - 2; i++) {
//     max = Math.max(max, A[i]);
//     if (max > A[i + 2]) return false;
//   }

//   return true;
// };
