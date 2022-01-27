// TS
// Runtime: 92 ms, faster than 100.00% of TypeScript online submissions for Asteroid Collision.
// Memory Usage: 41 MB, less than 33.33% of TypeScript online submissions for Asteroid Collision.
function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    const curr = asteroids[i];

    if (curr > 0) {
      stack.push(curr);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(curr)
      ) {
        stack.pop();
      }

      if (stack.length && stack[stack.length - 1] === Math.abs(curr)) {
        stack.pop();
      } else if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(curr);
      }
    }
  }

  return stack;
}

// JS
// Runtime: 92 ms, faster than 60.29% of JavaScript online submissions for Asteroid Collision.
// Memory Usage: 41.4 MB, less than 5.78% of JavaScript online submissions for Asteroid Collision.
// var asteroidCollision = function (asteroids) {
//   const stack = [];

//   for (let i = 0; i < asteroids.length; i++) {
//     const curr = asteroids[i];

//     if (curr > 0) {
//       stack.push(curr);
//     } else {
//       // if stack not empty
//       // AND if top is positive
//       // AND if top is smaller than curr
//       while (
//         stack.length &&
//         stack[stack.length - 1] > 0 &&
//         stack[stack.length - 1] < Math.abs(curr)
//       ) {
//         stack.pop();
//       }

//       // if stack not empty
//       // AND if top has the same size as curr
//       if (stack.length && stack[stack.length - 1] === Math.abs(curr)) {
//         stack.pop();
//       }
//       // if stack is empty
//       // OR top is negative
//       else if (!stack.length || stack[stack.length - 1] < 0) {
//         stack.push(curr);
//       }
//     }
//   }

//   return stack;
// };
