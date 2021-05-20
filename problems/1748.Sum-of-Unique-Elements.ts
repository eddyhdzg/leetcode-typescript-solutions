function sumOfUnique(nums: number[]): number {
  const hash: { [key: string]: number } = {};

  nums.forEach((num) => {
    num in hash ? num++ : (hash[num] = 1);
  });

  const res = Object.entries(hash)
    .filter(([key, value]) => value === 1)
    .reduce((acc, [curr]) => acc + Number(curr), 0);

  return res;
}
