function eventualSafeNodes(graph: number[][]): number[] {
  const res: number[] = [];
  const memo: { [key: string]: boolean } = {};

  function traverse(node: number, visited: { [key: string]: boolean }) {
    if (node in memo) {
      return memo[node];
    }
    if (!graph[node].length) {
      return true;
    }
    if (visited[node]) {
      return false;
    }
    for (let i = 0; i < graph[node].length; i++) {
      visited[node] = true;

      if (!traverse(graph[node][i], { ...visited })) {
        memo[node] = false;
        return false;
      }
    }

    memo[node] = true;
    return true;
  }

  for (let i = 0; i < graph.length; i++) {
    if (graph[i].length === 0) {
      res.push(i);
      memo[i] = true;
    } else if (traverse(i, {})) {
      res.push(i);
    }
  }
  return res;
}
