// type Flower = 1 | 2 | 3 | 4;

// function gardenNoAdj(N: number, paths: number[][]): number[] {
//   const graph: { [key: string]: number[] } = {};

//   paths.forEach(([x, y]) => {
//     graph[x] ? graph[x].push(y) : (graph[x] = [y]);
//     graph[y] ? graph[y].push(x) : (graph[y] = [x]);
//   });

//   const gardens: number[][] = Array(N)
//     .fill(null)
//     .map(() => []);

//   Object.entries(graph).forEach(([garden, neighbors]) => {
//     const flowers: Flower[] = [1, 2, 3, 4];

//     neighbors.forEach((neighbor) => {
//       if (gardens[neighbor - 1].length) {
//         flowers.splice(gardens[neighbor - 1][0] - 1, 1);
//       }
//     });

//     gardens[parseInt(garden) - 1].push(flowers[0]);
//   });

//   return gardens.map((garden) => garden[0]);
// }

// //   return ans;

// // gardenNoAdj(3, [
// //   [1, 2],
// //   [2, 3],
// //   [3, 1],
// // ]);

// gardenNoAdj(4, [
//   [1, 2],
//   [3, 4],
// ]);

// // gardenNoAdj(4, [
// //   [1, 2],
// //   [2, 3],
// //   [3, 4],
// //   [4, 1],
// //   [1, 3],
// //   [2, 4],
// // ]);
