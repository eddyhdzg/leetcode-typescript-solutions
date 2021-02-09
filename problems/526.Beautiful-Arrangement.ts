function countArrangement(n: number): number {
  let res = 0;

  const dfs = (queue: number[], stock: number[]) => {
    if (!stock.length) {
      res++;
      return;
    }

    for (let i = 0; i < stock.length; i++) {
      const curr = stock[i];

      if (curr % (queue.length + 1) === 0 || (queue.length + 1) % curr === 0) {
        const rest = stock.filter((_, index) => i !== index);
        dfs([...queue, curr], rest);
      }
    }
  };

  const initialStock = Array.from({ length: n }, (_, i) => i + 1);

  dfs([], initialStock);

  return res;
}
