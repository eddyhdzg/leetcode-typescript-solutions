// Runtime: 88 ms, faster than 44.71% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 38.9 MB, less than 51.65% of JavaScript online submissions for Fizz Buzz.

function fizzBuzz(n: number): string[] {
  return [...Array(n).keys()].map((i) => {
    const num = i + 1;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num.toString();
  });
}
