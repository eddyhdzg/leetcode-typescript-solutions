// TS
function calPoints(ops: string[]): number {
  const stack: number[] = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === '+') {
      stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
    } else if (ops[i] === 'D') {
      stack.push(2 * stack[stack.length - 1]);
    } else if (ops[i] === 'C') {
      stack.pop();
    } else {
      stack.push(Number(ops[i]));
    }
  }

  return stack.reduce((acc, curr) => acc + curr, 0);
}

// JS
// var calPoints = function (ops) {
//   const stack = [];

//   for (let i = 0; i < ops.length; i++) {
//     if (ops[i] === '+') {
//       stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
//     } else if (ops[i] === 'D') {
//       stack.push(2 * stack[stack.length - 1]);
//     } else if (ops[i] === 'C') {
//       stack.pop();
//     } else {
//       stack.push(Number(ops[i]));
//     }
//   }

//   return stack.reduce((acc, curr) => acc + curr, 0);
// };
