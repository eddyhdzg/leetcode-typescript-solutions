// JS
// Runtime: 84 ms, faster than 92.41% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
// Memory Usage: 41.6 MB, less than 82.98% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
var numPairsDivisibleBy60 = function (time) {
  let pairs = 0;
  const array = Array(60).fill(0);

  for (let i = 0; i < time.length; i++) {
    array[time[i] % 60]++;
  }

  for (let i = 1; i < 30; i++) {
    pairs += array[i] * array[60 - i];
  }

  pairs += sumOfN(array[0] - 1) + sumOfN(array[30] - 1);

  return pairs;
};

const sumOfN = (n) => {
  return (n * (n + 1)) / 2;
};

// TS
// Runtime: 92 ms, faster than 68.42% of TypeScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
// Memory Usage: 42.5 MB, less than 47.37% of TypeScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
function numPairsDivisibleBy60(time: number[]): number {
  let pairs = 0;
  const array = Array(60).fill(0);

  for (let i = 0; i < time.length; i++) {
    array[time[i] % 60]++;
  }

  for (let i = 1; i < 30; i++) {
    pairs += array[i] * array[60 - i];
  }

  pairs += sumOfN(array[0] - 1) + sumOfN(array[30] - 1);

  return pairs;
}

const sumOfN = (n: number) => {
  return (n * (n + 1)) / 2;
};
