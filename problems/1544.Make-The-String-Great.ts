// TS
function makeGood(s: string): string {
  const stack: string[] = [];

  let i = 0;

  const isBad = (c1: string, c2: string) => {
    return Math.abs(c1.charCodeAt(0) - c2.charCodeAt(0)) === 32;
  };

  while (i < s.length) {
    stack.push(s.charAt(i));

    while (
      stack.length > 1 &&
      isBad(stack[stack.length - 2], stack[stack.length - 1])
    ) {
      stack.pop();
      stack.pop();
    }

    i++;
  }

  return stack.join('');
}

// JS
// var makeGood = function (s) {
//   const stack = [];

//   let i = 0;

//   const isBad = (c1, c2) => {
//     return Math.abs(c1.charCodeAt(0) - c2.charCodeAt(0)) === 32;
//   };

//   while (i < s.length) {
//     stack.push(s.charAt(i));

//     while (
//       stack.length > 1 &&
//       isBad(stack[stack.length - 2], stack[stack.length - 1])
//     ) {
//       stack.pop();
//       stack.pop();
//     }

//     i++;
//   }

//   return stack.join('');
// };
