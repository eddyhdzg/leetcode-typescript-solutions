// Runtime: 100 ms, faster than 94.29% of JavaScript online submissions for Implement Rand10() Using Rand7().
// Memory Usage: 43.9 MB, less than 54.29% of JavaScript online submissions for Implement Rand10() Using Rand7().
const rand10 = function () {
  let random = 41;
  while (random > 40) {
    random = 7 * (rand7() - 1) + rand7();
  }
  return (random % 10) + 1;
};
