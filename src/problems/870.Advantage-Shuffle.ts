function advantageCount(A: number[], B: number[]): number[] {
  const sortedA = [...A].sort((a, b) => a - b);
  const sortedB = [...B].sort((a, b) => a - b);
  const unused: number[] = [];
  const res: number[] = Array(A.length).fill(null);

  let i = 0;
  let j = 0;

  while (i < A.length) {
    if (sortedA[i] > sortedB[j]) {
      const index = B.indexOf(sortedB[j]);
      res[index] = sortedA[i];
      B[index] = Infinity;
      j++;
    } else {
      unused.push(sortedA[i]);
    }

    i++;
  }

  for (let i = 0; i < A.length; i++) {
    if (res[i] === null) {
      res[i] = unused.pop()!;
    }
  }

  return res;
}
