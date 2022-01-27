// JS
// Runtime: 80 ms, faster than 91.63% of JavaScript online submissions for Friend Circles.
// Memory Usage: 40.7 MB, less than 9.41% of JavaScript online submissions for Friend Circles.
function findCircleNum(M: number[][]): number {
  const visited = new Set<number>();

  let circles = 0;
  for (let i = 0; i < M.length; i++) {
    if (!visited.has(i)) {
      dfs(i);

      circles++;
    }
  }

  return circles;

  function dfs(i: number) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1 && !visited.has(j)) {
        visited.add(j);
        dfs(j);
      }
    }
  }
}

// Union find solution
// function findCircleNum(M: number[][]): number {
//   // Generate Graph
//   const graph: { [key: string]: number[] } = {};
//   for (let i = 0; i < M.length; i++) graph[i] = [];
//   for (let i = 0; i < M.length; i++)
//     for (let j = i + 1; j < M[0].length; j++)
//       if (M[i][j] && i !== j) {
//         graph[i].push(j);
//         graph[j].push(i);
//       }

//   // Generate UF
//   const uf: { [key: string]: number } = {};
//   for (let i = 0; i < M.length; i++) uf[i] = i;

//   // Find
//   const find = (x: number): number => {
//     return uf[x] === x ? x : find(uf[x]);
//   };

//   // Union
//   const union = (a: number, b: number) => {
//     uf[find(a)] = uf[find(b)];
//   };

//   Object.entries(graph).forEach(([key, values]) => {
//     values.forEach((value) => {
//       union(parseInt(key), value);
//     });
//   });

//   const set = new Set<number>();

//   Object.keys(uf).forEach((key) => set.add(find(parseInt(key))));

//   return set.size;
// }
