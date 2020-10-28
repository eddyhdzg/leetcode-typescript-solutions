// TS
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Clone Graph.
// Memory Usage: 40.4 MB, less than 100.00% of TypeScript online submissions for Clone Graph.
function cloneGraph(node: Node | null): Node | null {
  if (!node) return null;
  const hash: { [key: string]: Node } = {};

  let queue: Node[] = [node];
  const visited = new Set<number>();

  // Iteration to create all Nodes
  while (queue.length) {
    const { val, neighbors } = queue.shift()!;
    if (!visited.has(val)) {
      hash[val] = new Node(val);
      visited.add(val);
      queue.push(...neighbors);
    }
  }

  // Iteration to add all neighbors
  queue = [node];
  visited.clear();
  while (queue.length) {
    const { val, neighbors } = queue.shift()!;
    if (!visited.has(val)) {
      neighbors.forEach((neighbor) => {
        hash[val].neighbors.push(hash[neighbor.val]);
      });
      visited.add(val);
      queue.push(...neighbors);
    }
  }

  return hash[node.val];
}

// JS
// Runtime: 80 ms, faster than 74.90% of JavaScript online submissions for Clone Graph.
// Memory Usage: 40.6 MB, less than 10.04% of JavaScript online submissions for Clone Graph.
// var cloneGraph = function (node) {
//   if (!node) return null;
//   const hash = {};

//   let queue = [node];
//   const visited = new Set();

//   // Iteration to create all Nodes
//   while (queue.length) {
//     const { val, neighbors } = queue.shift();
//     if (!visited.has(val)) {
//       hash[val] = new Node(val);
//       visited.add(val);
//       queue.push(...neighbors);
//     }
//   }

//   // Iteration to add all neighbors
//   queue = [node];
//   visited.clear();
//   while (queue.length) {
//     const { val, neighbors } = queue.shift();
//     if (!visited.has(val)) {
//       neighbors.forEach((neighbor) => {
//         hash[val].neighbors.push(hash[neighbor.val]);
//       });
//       visited.add(val);
//       queue.push(...neighbors);
//     }
//   }

//   return hash[node.val];
// };
