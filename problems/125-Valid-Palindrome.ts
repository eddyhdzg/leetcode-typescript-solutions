// Runtime: 84 ms, faster than 82.42% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 38.5 MB, less than 70.25% of JavaScript online submissions for Valid Palindrome.

function isPalindrome(s: string): boolean {
  const auxS = s.replace(/[^a-z\d]/g, '').toLocaleLowerCase();

  const len = auxS.length - 1;
  for (let i = 0, j = len; i <= Math.floor(len / 2); i++, j--) {
    if (auxS[i] !== auxS[j]) return false;
  }
  return true;
}
