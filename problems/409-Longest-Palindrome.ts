// Runtime: 76 ms, faster than 81.42% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 37.9 MB, less than 45.27% of JavaScript online submissions for Longest Palindrome.

function longestPalindrome(s: string): number {
  const hash: { [key: string]: number } = {};

  s.split('').forEach((char) => (hash[char] ? hash[char]++ : (hash[char] = 1)));

  let odd = false;
  let res = Object.values(hash).reduce((acc, curr) => {
    if (curr % 2 === 0) {
      return (acc += curr);
    }
    odd = true;
    return (acc += curr - 1);
  }, 0);

  if (odd) {
    res++;
  }

  return res;
}
