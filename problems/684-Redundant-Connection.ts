function findRedundantConnection(edges: number[][]): number[] {
  const uf: { [key: string]: number } = {};

  const find = (x: number): number => {
    if (!uf[x]) {
      uf[x] = x;
    }

    return uf[x] === x ? x : uf[find(x)];
  };

  const union = (a: number, b: number): void => {
    uf[find(a)] = uf[find(b)];
  };

  for (const edge of edges) {
    const [u, v] = edge;

    if (find(u) === find(v)) return edge;

    union(u, v);
  }

  return [];
}
