function gardenNoAdj(n: number, paths: number[][]): number[] {
  const graph: { [key: string]: number[] } = {};
  const flowers: { [key: string]: number } = {};
  for (let i = 1; i <= n; i++) graph[i] = [];

  paths.forEach(([x, y]) => {
    graph[x].push(y);
    graph[y].push(x);
  });

  const getFlower = (i: number) => {
    const possibleTypes = new Set<number>([1, 2, 3, 4]);
    graph[i].forEach((garden) => {
      possibleTypes.delete(flowers[garden]);
    });

    return Math.min(...possibleTypes);
  };

  for (let i = 1; i <= n; i++) {
    flowers[i] = getFlower(i);
  }

  return Object.values(flowers);
}
