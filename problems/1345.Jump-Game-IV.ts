function minJumps(arr: number[]): number {
  const hash: { [key: string]: Set<number> } = {};

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (!(curr in hash)) {
      hash[curr] = new Set();
    }
    hash[curr].add(i);
  }

  const neighbours = (idx: number): number[] => {
    const res: number[] = [];

    if (idx + 1 < arr.length) res.push(idx + 1);
    if (idx - 1 >= 0) res.push(idx - 1);

    res.push(...hash[arr[idx]]);
    hash[arr[idx]].clear();

    return res;
  };

  let steps = 0;

  const visited = new Set<number>([0]);
  let queue: number[] = [0];

  while (true) {
    let newQueue: number[] = [];

    while (queue.length) {
      let idx = queue.pop()!;
      if (idx === arr.length - 1) {
        return steps;
      }

      for (let neigh of neighbours(idx)) {
        if (!visited.has(neigh)) {
          visited.add(neigh);
          newQueue.push(neigh);
        }
      }
    }

    steps++;
    queue = newQueue;
  }
}
