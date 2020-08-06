// Runtime: 104 ms, faster than 29.94% of JavaScript online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 36.3 MB, less than 59.48% of JavaScript online submissions for Two Sum II - Input array is sorted.

function twoSum(numbers: number[], target: number): number[] {
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < numbers.length; i++) {
    const n = target - numbers[i];
    const find = hash[n];
    if (find !== undefined) return [find + 1, i + 1];
    hash[numbers[i]] = i;
  }
  return [];
}
