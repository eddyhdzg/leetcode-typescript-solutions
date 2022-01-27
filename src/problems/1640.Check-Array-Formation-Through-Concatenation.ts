// JS
// Runtime: 72 ms, faster than 93.26% of JavaScript online submissions for Check Array Formation Through Concatenation.
// Memory Usage: 38.9 MB, less than 60.45% of JavaScript online submissions for Check Array Formation Through Concatenation.
var canFormArray = function (arr, pieces) {
  let hash = {};

  pieces.forEach((piece) => {
    const first = piece[0];
    hash[first] = piece;
  });

  let i = 0;

  while (i < arr.length) {
    const curr = arr[i];

    if (!(curr in hash)) {
      return false;
    }

    for (let j = 0; j < hash[curr].length; i++, j++) {
      if (arr[i] !== hash[curr][j]) {
        return false;
      }
    }
  }

  return true;
};

// TS
// Runtime: 80 ms, faster than 84.21% of TypeScript online submissions for Check Array Formation Through Concatenation.
// Memory Usage: 40.2 MB, less than 63.16% of TypeScript online submissions for Check Array Formation Through Concatenation.
function canFormArray(arr: number[], pieces: number[][]): boolean {
  let hash: { [key: string]: number[] } = {};

  pieces.forEach((piece) => {
    const first = piece[0];
    hash[first] = piece;
  });

  let i = 0;

  while (i < arr.length) {
    const curr = arr[i];

    if (!(curr in hash)) {
      return false;
    }

    for (let j = 0; j < hash[curr].length; i++, j++) {
      if (arr[i] !== hash[curr][j]) {
        return false;
      }
    }
  }

  return true;
}
