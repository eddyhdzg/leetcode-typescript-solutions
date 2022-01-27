// TS
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Letter Case Permutation.
// Memory Usage: 42.3 MB, less than 100.00% of TypeScript online submissions for Letter Case Permutation.

const isLetter = (s: string) => {
  const n = s.charCodeAt(0);
  return (n >= 65 && n < 91) || (n >= 97 && n < 123);
};

const isUpper = (s: string) => {
  const n = s.charCodeAt(0);
  return n >= 65 && n < 91;
};

const replaceAt = (s: string, c: string, i: number) => {
  return (s = s.substring(0, i) + c + s.substring(i + 1));
};

function letterCasePermutation(S: string): string[] {
  const res: string[] = [S];

  for (let i = 0; i < S.length; i++) {
    if (isLetter(S[i])) {
      const newChar = isUpper(S[i]) ? S[i].toLowerCase() : S[i].toUpperCase();

      res.forEach((curr) => {
        res.push(replaceAt(curr, newChar, i));
      });
    }
  }

  return res;
}

// JS
// Runtime: 96 ms, faster than 67.67% of JavaScript online submissions for Letter Case Permutation.
// Memory Usage: 41.2 MB, less than 99.14% of JavaScript online submissions for Letter Case Permutation.

// const isLetter = (s) => {
//   const n = s.charCodeAt(0);
//   return (n >= 65 && n < 91) || (n >= 97 && n < 123);
// };

// const isUpper = (s) => {
//   const n = s.charCodeAt(0);
//   return n >= 65 && n < 91;
// };

// const replaceAt = (s, c, i) => {
//   return (s = s.substring(0, i) + c + s.substring(i + 1));
// };

// function letterCasePermutation(S) {
//   const res = [S];

//   for (let i = 0; i < S.length; i++) {
//     if (isLetter(S[i])) {
//       const newChar = isUpper(S[i]) ? S[i].toLowerCase() : S[i].toUpperCase();

//       res.forEach((curr) => {
//         res.push(replaceAt(curr, newChar, i));
//       });
//     }
//   }

//   return res;
// }
