// TS
// Runtime: 84 ms, faster than 95.45% of TypeScript online submissions for Course Schedule.
// Memory Usage: 41.1 MB, less than 77.27% of TypeScript online submissions for Course Schedule.

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from(Array(numCourses), () => []);
  const ranks: number[] = Array(numCourses).fill(0);

  prerequisites.forEach(([u, v]) => {
    graph[v].push(u);
    ranks[u]++;
  });

  const queue: number[] = [];

  ranks.forEach((r, i) => {
    if (!r) queue.push(i);
  });

  while (queue.length) {
    const f = queue.shift();
    numCourses--;

    graph[f as number].forEach((neigh) => {
      ranks[neigh]--;
      if (!ranks[neigh]) queue.push(neigh);
    });
  }

  return !numCourses;
}

// JS
// Runtime: 76 ms, faster than 99.42% of JavaScript online submissions for Course Schedule.
// Memory Usage: 41.2 MB, less than 63.39% of JavaScript online submissions for Course Schedule.
// var canFinish = function (numCourses, prerequisites) {
//   const graph = Array.from(Array(numCourses), () => []);
//   const ranks = Array(numCourses).fill(0);

//   prerequisites.forEach(([u, v]) => {
//     graph[v].push(u);
//     ranks[u]++;
//   });

//   const queue = [];

//   ranks.forEach((r, i) => {
//     if (!r) queue.push(i);
//   });

//   while (queue.length) {
//     const f = queue.shift();
//     numCourses--;

//     graph[f].forEach((neigh) => {
//       ranks[neigh]--;
//       if (!ranks[neigh]) queue.push(neigh);
//     });
//   }

//   return !numCourses;
// };
