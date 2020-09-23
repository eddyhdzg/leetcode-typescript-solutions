// function findTheCity(
//     n: number,
//     edges: number[][],
//     distanceThreshold: number
//   ): number {
//     const distance: number[][] = Array(n)
//       .fill(0)
//       .map(() => Array(n).fill(Number.MAX_SAFE_INTEGER));

//     for (const [from, to, weight] of edges) {
//       distance[from][to] = weight;
//       distance[to][from] = weight;
//     }

//     for (let i = 0; i < n; ++i) {
//       for (let j = 0; j < n; ++j) {
//         for (let k = 0; k < n; ++k) {
//           if (k !== j) {
//             distance[j][k] = Math.min(
//               distance[j][k],
//               distance[j][i] + distance[i][k]
//             );
//           }
//         }
//       }
//     }

//     let city = 0;
//     let minNum = n;
//     for (let i = 0; i < n; ++i) {
//       let curNum = 0;
//       for (let j = 0; j < n; ++j) {
//         distance[i][j] <= distanceThreshold && ++curNum;
//       }
//       if (curNum <= minNum) {
//         minNum = curNum;
//         city = i;
//       }
//     }
//     return city;
//   }

//   findTheCity(
//     4,
//     [
//       [0, 1, 3],
//       [1, 2, 1],
//       [1, 3, 4],
//       [2, 3, 1],
//     ],
//     4
//   );
