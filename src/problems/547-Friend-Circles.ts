function findCircleNum(isConnected: number[][]): number {
  let circles = 0;
  const visited = new Set<number>();

  const dfs = (i: number) => {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] && !visited.has(j)) {
        visited.add(j);
        dfs(j);
      }
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      circles++;
      dfs(i);
    }
  }

  return circles;
}

// JavaScript
/*
var findCircleNum = function (M) {
  let circles = 0;
  const visited = new Set();

  const dfs = (i) => {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] && !visited.has(j)) {
        visited.add(j);
        dfs(j);
      }
    }
  };

  for (let i = 0; i < M.length; i++) {
    if (!visited.has(i)) {
      circles++;
      dfs(i);
    }
  }

  return circles;
};
*/
