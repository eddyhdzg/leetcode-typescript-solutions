// TS
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Score of Parentheses.
// Memory Usage: 39.1 MB, less than 81.82% of TypeScript online submissions for Score of Parentheses.
function scoreOfParentheses(S: string): number {
  const stack: number[] = [];
  let score = 0;

  for (let c of S) {
    if (c === '(') {
      stack.push(score);
      score = 0;
    } else score = stack.pop()! + Math.max(score * 2, 1);
  }
  return score;
}

// JS
// Runtime: 72 ms, faster than 95.70% of JavaScript online submissions for Score of Parentheses.
// Memory Usage: 38.9 MB, less than 12.90% of JavaScript online submissions for Score of Parentheses.
// var scoreOfParentheses = function (S) {
//   const stack = [];
//   let score = 0;

//   for (let c of S) {
//     if (c === '(') {
//       stack.push(score);
//       score = 0;
//     } else score = stack.pop() + Math.max(score * 2, 1);
//   }
//   return score;
// };
