// Runtime: 68 ms, faster than 93.42% of JavaScript online submissions for Find Numbers with Even Number of Digits.
// Memory Usage: 37.5 MB, less than 25.14% of JavaScript online submissions for Find Numbers with Even Number of Digits.

function findNumbers(nums: number[]): number {
  return nums.reduce((acc, curr) => {
    const numString = curr.toString();

    if (numString.length % 2 === 0) {
      return acc + 1;
    }
    return acc;
  }, 0);
}
