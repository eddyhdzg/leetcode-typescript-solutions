// TS
// Runtime: 272 ms, faster than 100.00% of TypeScript online submissions for Flower Planting With No Adjacent.
// Memory Usage: 59.7 MB, less than 100.00% of TypeScript online submissions for Flower Planting With No Adjacent.
function gardenNoAdj(N: number, paths: number[][]): number[] {
  const hash: {
    [key: string]: {
      connections: number[];
      type: number;
    };
  } = {};

  for (let i = 1; i <= N; i++) {
    hash[i] = {
      connections: [],
      type: 0,
    };
  }

  paths.forEach(([a, b]) => {
    if (a > b) {
      hash[a].connections.push(b);
    } else {
      hash[b].connections.push(a);
    }
  });

  Object.entries(hash).forEach(([key, { connections }]) => {
    const possibleTypes = new Set([1, 2, 3, 4]);

    connections.forEach((connection) => {
      possibleTypes.delete(hash[connection].type);
    });

    hash[key].type = Math.min(...possibleTypes);
  });

  return Object.values(hash).map(({ type }) => type);
}

// // JS
// // Runtime: 280 ms, faster than 24.00% of JavaScript online submissions for Flower Planting With No Adjacent.
// // Memory Usage: 59.5 MB, less than 12.00% of JavaScript online submissions for Flower Planting With No Adjacent.
// var gardenNoAdj = function (N, paths) {
//   const hash = {};

//   // Initialize
//   for (let i = 1; i <= N; i++) {
//     hash[i] = {
//       connections: [],
//       type: 0,
//     };
//   }

//   // Add connection in bigger path
//   paths.forEach(([a, b]) => {
//     if (a > b) {
//       hash[a].connections.push(b);
//     } else {
//       hash[b].connections.push(a);
//     }
//   });

//   // Set minimum possible path
//   Object.entries(hash).forEach(([key, { connections }]) => {
//     const possibleTypes = new Set([1, 2, 3, 4]);

//     connections.forEach((connection) => {
//       possibleTypes.delete(hash[connection].type);
//     });

//     hash[key].type = Math.min(...possibleTypes);
//   });

//   // Return types
//   return Object.values(hash).map(({ type }) => type);
// };
