function findJudge(N: number, trust: number[][]): number {
  const array = new Array(N).fill(0);

  trust.forEach(([a, b]) => {
    array[a - 1]--;
    array[b - 1]++;
  });

  const judge = array.indexOf(N - 1);
  return judge !== -1 ? judge + 1 : -1;
}
