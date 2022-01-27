function fourSumCount(
  A: number[],
  B: number[],
  C: number[],
  D: number[]
): number {
  let res = 0;
  const ABHash: { [key: string]: number } = {};

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      const AB = A[i] + B[j];

      AB in ABHash ? ABHash[AB]++ : (ABHash[AB] = 1);
    }
  }

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      const CD = -(C[i] + D[j]);

      if (CD in ABHash) {
        res += ABHash[-CD];
      }
    }
  }

  return res;
}
