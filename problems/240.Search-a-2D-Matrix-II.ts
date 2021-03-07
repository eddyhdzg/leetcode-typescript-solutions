// TS
function searchMatrix(matrix: number[][], target: number): boolean {
  let r = matrix.length - 1;
  let c = 0;

  while (r >= 0 && c < matrix[0].length) {
    if (matrix[r][c] === target) return true;
    else if (matrix[r][c] > target) r--;
    else c++;
  }

  return false;
}

// JS
// var searchMatrix = function (matrix, target) {
//   let r = matrix.length - 1;
//   let c = 0;

//   while (r >= 0 && c < matrix[0].length) {
//     if (matrix[r][c] === target) return true;
//     else if (matrix[r][c] > target) r--;
//     else c++;
//   }

//   return false;
// };
