// JS
// Runtime: 80 ms, faster than 83.92% of JavaScript online submissions for Redundant Connection.
// Memory Usage: 39.2 MB, less than 54.55% of JavaScript online submissions for Redundant Connection.
// var findRedundantConnection = function (edges) {
//   const uf = {};

//   const union = (a, b) => {
//     uf[find(a)] = uf[find(b)];
//   };

//   const find = (x) => {
//     if (!uf[x]) {
//       uf[x] = x;
//     }

//     return uf[x] === x ? x : find(uf[x]);
//   };

//   for (const edge of edges) {
//     const [u, v] = edge;

//     if (find(u) === find(v)) return edge;

//     union(u, v);
//   }
// };

// TS
// Runtime: 112 ms, faster than 66.67% of TypeScript online submissions for Redundant Connection.
// Memory Usage: 39.7 MB, less than 66.67% of TypeScript online submissions for Redundant Connection.
function findRedundantConnection(edges: number[][]) {
  const uf: { [key: string]: number } = {};

  const union = (a: number, b: number) => {
    uf[find(a)] = uf[find(b)];
  };

  const find = (x: number): number => {
    if (!uf[x]) {
      uf[x] = x;
    }


  };

  for (const edge of edges) {
    const [u, v] = edge;

    if (find(u) === find(v)) return edge;

    union(u, v);
  }
}

// https://www.youtube.com/watch?v=MdI6sXCAiso&t=625s
