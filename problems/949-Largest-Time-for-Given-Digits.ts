// JS
// Runtime: 84 ms, faster than 52.69% of JavaScript online submissions for Largest Time for Given Digits.
// Memory Usage: 38.5 MB, less than 29.03% of JavaScript online submissions for Largest Time for Given Digits.
const permutations = (nums, set = [], perms = []) => {
  if (!nums.length) perms.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    const rest = nums.filter((_, index) => i !== index);
    set.push(nums[i]);
    permutations(rest, set, perms);
    set.pop();
  }

  return perms;
};

var largestTimeFromDigits = function (A) {
  A.sort((a, b) => b - a);
  const perms = permutations(A);

  const filtered = perms.filter(([h1, h2, m1, m2]) => {
    const hour = h1 * 10 + h2;
    const min = m1 * 10 + m2;

    return hour <= 23 && min <= 59;
  });

  if (!filtered.length) {
    return '';
  }

  const [h1, h2, m1, m2] = filtered[0];
  return `${h1}${h2}:${m1}${m2}`;
};

// // TS
// // Runtime: 108 ms, faster than 50.00% of TypeScript online submissions for Largest Time for Given Digits.
// // Memory Usage: 40.2 MB, less than 50.00% of TypeScript online submissions for Largest Time for Given Digits.
const permutations = (
  nums: number[],
  set: number[] = [],
  perms: number[][] = []
) => {
  if (!nums.length) perms.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    const rest = nums.filter((_, index) => i !== index);
    set.push(nums[i]);
    permutations(rest, set, perms);
    set.pop();
  }

  return perms;
};

function largestTimeFromDigits(A: number[]): string {
  A.sort((a, b) => b - a);
  const perms = permutations(A);

  const filtered = perms.filter(([h1, h2, m1, m2]) => {
    const hour = h1 * 10 + h2;
    const min = m1 * 10 + m2;

    return hour <= 23 && min <= 59;
  });

  if (!filtered.length) {
    return '';
  }

  const [h1, h2, m1, m2] = filtered[0];
  return `${h1}${h2}:${m1}${m2}`;
}
