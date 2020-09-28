// TS
// Runtime: 96 ms, faster than 40.00% of TypeScript online submissions for Evaluate Division.
// Memory Usage: 40 MB, less than 20.00% of TypeScript online submissions for Evaluate Division.
function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const graph: {
    [key: string]: {
      [key: string]: number;
    };
  } = {};

  function getResult([dividend, divisor]: string[]) {
    if (!graph[dividend] || !graph[divisor]) return -1;

    const visited = new Set([dividend]);

    const q: { curr: string; res: number }[] = [{ curr: dividend, res: 1 }];
    while (q.length) {
      const { curr, res } = q.pop()!;
      if (curr === divisor) return res;

      if (curr in graph) {
        for (const [child, mult] of Object.entries(graph[curr])) {
          if (!visited.has(child)) {
            visited.add(child);
            q.push({
              curr: child,
              res: res * mult,
            });
          }
        }
      }
    }

    return -1;
  }

  equations.forEach(([dividend, divisor], i) => {
    const result = values[i];
    if (!(dividend in graph)) graph[dividend] = {};
    graph[dividend][divisor] = result;
    if (!(divisor in graph)) graph[divisor] = {};
    graph[divisor][dividend] = 1 / result;
  });

  return queries.map((query) => getResult(query));
}

// JS
// Runtime: 72 ms, faster than 81.05% of JavaScript online submissions for Evaluate Division.
// Memory Usage: 38.5 MB, less than 5.26% of JavaScript online submissions for Evaluate Division.
//   const calcEquation = function (equations, values, queries) {
//     const graph = {};

//     function getResult([dividend, divisor]) {
//       if (!graph[dividend] || !graph[divisor]) return -1;

//       const visited = new Set([dividend]);

//       const q = [{ curr: dividend, res: 1 }];
//       while (q.length) {
//         const { curr, res } = q.pop();
//         if (curr === divisor) return res;

//         if (curr in graph) {
//           for (const [child, mult] of Object.entries(graph[curr])) {
//             if (!visited.has(child)) {
//               visited.add(child);
//               q.push({
//                 curr: child,
//                 res: res * mult,
//               });
//             }
//           }
//         }
//       }

//       return -1;
//     }

//     equations.forEach(([dividend, divisor], i) => {
//       const result = values[i];
//       if (!(dividend in graph)) graph[dividend] = {};
//       graph[dividend][divisor] = result;
//       if (!(divisor in graph)) graph[divisor] = {};
//       graph[divisor][dividend] = 1 / result;
//     });

//     return queries.map((query) => getResult(query));
//   };
