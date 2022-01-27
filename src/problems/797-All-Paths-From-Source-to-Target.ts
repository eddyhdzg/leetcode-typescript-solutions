// JS
// Runtime: 120 ms, faster than 59.28% of JavaScript online submissions for All Paths From Source to Target.
// Memory Usage: 47.2 MB, less than 18.57% of JavaScript online submissions for All Paths From Source to Target.
var allPathsSourceTarget = function (graph) {
  const res = [];

  const dfs = (i, stack) => {
    if (stack.includes(i)) return;

    stack.push(i);

    if (i === graph.length - 1) res.push(stack);
    else graph[i].forEach((node) => dfs(node, [...stack]));
  };

  dfs(0, []);
  return res;
};

// TS
// Runtime: 116 ms, faster than 80.00% of TypeScript online submissions for All Paths From Source to Target.
// Memory Usage: 47.6 MB, less than 20.00% of TypeScript online submissions for All Paths From Source to Target.
function allPathsSourceTarget(graph: number[][]): number[][] {
  const res: number[][] = [];

  const dfs = (i: number, stack: number[]) => {
    if (stack.includes(i)) return;

    stack.push(i);

    if (i === graph.length - 1) res.push(stack);
    else graph[i].forEach((node) => dfs(node, [...stack]));
  };

  dfs(0, []);
  return res;
}
