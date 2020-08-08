// Runtime: 72 ms, faster than 83.53% of JavaScript online submissions for Number of Good Pairs.
// Memory Usage: 36.8 MB, less than 13.38% of JavaScript online submissions for Number of Good

function numIdenticalPairs(nums: number[]): number {
  const hash: { [key: string]: number } = {};
  const arr: number[] = [];
  arr.push(0, 0);
  for (let i = 2; i < 100; i++) arr.push(arr[i - 1] + i - 1);

  nums.forEach((i) => {
    hash[i] ? hash[i]++ : (hash[i] = 1);
  });

  return Object.values(hash).reduce((acc, curr) => {
    return curr > 1 ? acc + arr[curr] : acc;
  }, 0);
}
