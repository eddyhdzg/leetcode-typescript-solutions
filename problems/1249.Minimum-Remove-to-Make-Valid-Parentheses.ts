// TS
// Runtime: 92 ms, faster than 94.29% of TypeScript online submissions for Minimum Remove to Make Valid Parentheses.
// Memory Usage: 46.7 MB, less than 51.43% of TypeScript online submissions for Minimum Remove to Make Valid Parentheses.

const removeByIndex = (s: string, index: number) => {
  return s.slice(0, index) + s.slice(index + 1);
};

function minRemoveToMakeValid(s: string): string {
  let open = 0;

  let i = 0;
  while (i < s.length) {
    if (s[i] === '(') open++;
    else if (s[i] === ')') {
      if (open === 0) {
        s = removeByIndex(s, i);
        continue;
      }
      open--;
    }
    i++;
  }

  i = s.length - 1;
  while (open > 0 && i >= 0) {
    if (s[i] === '(') {
      s = removeByIndex(s, i);
      open--;
    } else i--;
  }

  return s;
}

// JS
// Runtime: 92 ms, faster than 94.36% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
// Memory Usage: 46.7 MB, less than 48.70% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
// const removeByIndex = (s, index) => {
//   return s.slice(0, index) + s.slice(index + 1);
// };

// var minRemoveToMakeValid = function (s) {
//   let open = 0;

//   let i = 0;
//   while (i < s.length) {
//     if (s[i] === '(') open++;
//     else if (s[i] === ')') {
//       if (open === 0) {
//         s = removeByIndex(s, i);
//         continue;
//       }
//       open--;
//     }
//     i++;
//   }

//   i = s.length - 1;
//   while (open > 0 && i >= 0) {
//     if (s[i] === '(') {
//       s = removeByIndex(s, i);
//       open--;
//     } else i--;
//   }

//   return s;
// };
