// TS
const reverseInPlace = (s: string, start: number, end: number) => {
  const before = s.slice(0, start + 1);
  const reverse = s
    .slice(start + 1, end)
    .split('')
    .reverse()
    .join('');
  const after = s.slice(end);
  return before + reverse + after;
};

function reverseParentheses(s: string): string {
  const openers: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') openers.push(i);
    else if (s.charAt(i) === ')') {
      const lastOpener = openers.pop()!;
      s = reverseInPlace(s, lastOpener, i);
    }
  }

  return s.replace(/[()]/g, '');
}

// JS
// const reverseInPlace = (s, start, end) => {
//     const before = s.slice(0, start + 1);
//     const reverse = s
//       .slice(start + 1, end)
//       .split('')
//       .reverse()
//       .join('');
//     const after = s.slice(end);
//     return before + reverse + after;
//   };

//   var reverseParentheses = function (s) {
//     const openers = [];

//     for (let i = 0; i < s.length; i++) {
//       if (s.charAt(i) === '(') openers.push(i);
//       else if (s.charAt(i) === ')') {
//         const lastOpener = openers.pop();
//         s = reverseInPlace(s, lastOpener, i);
//       }
//     }

//     return s.replace(/[()]/g, '');
//   };
