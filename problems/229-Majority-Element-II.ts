// Runtime: 76 ms, faster than 94.58% of JavaScript online submissions for Majority Element II.
// Memory Usage: 38.7 MB, less than 71.25% of JavaScript online submissions for Majority Element II.
var majorityElement = function (nums) {
  const m = nums.length / 3;
  const hash = {};

  nums.forEach((num) => {
    if (!(num in hash)) hash[num] = 1;
    else hash[num]++;
  });

  return Object.entries(hash)
    .filter(([, val]) => val > m)
    .map(([key]) => parseInt(key));
};

// Runtime: 92 ms, faster than 20.00% of TypeScript online submissions for Majority Element II.
// Memory Usage: 40 MB, less than 100.00% of TypeScript online submissions for Majority Element II.
function majorityElement(nums: number[]): number[] {
  const m = nums.length / 3;
  const hash: { [key: string]: number } = {};

  nums.forEach((num) => {
    if (!(num in hash)) hash[num] = 1;
    else hash[num]++;
  });

  return Object.entries(hash)
    .filter(([, val]) => val > m)
    .map(([key]) => parseInt(key));
}
