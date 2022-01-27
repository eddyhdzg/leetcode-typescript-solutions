function equationsPossible(equations: string[]): boolean {
  const uf: { [key: string]: string } = {};

  equations.forEach(([char1, , , char2]) => {
    if (!uf[char1]) uf[char1] = char1;
    if (!uf[char2]) uf[char2] = char2;
  });

  const find = (x: string): string => {
    return uf[x] === x ? x : find(uf[x]);
  };

  const union = (a: string, b: string) => {
    uf[find(a)] = uf[find(b)];
  };

  equations.forEach(([a, s, , b]) => {
    if (s === '=') union(a, b);
  });

  for (let i = 0; i < equations.length; i++) {
    const [a, s, , b] = equations[i];
    if (s === '!') {
      if (find(uf[a]) === find(uf[b])) return false;
    }
  }

  return true;
}
