// JS
// Runtime: 72 ms, faster than 95.77% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 38.8 MB, less than 59.66% of JavaScript online submissions for Valid Parentheses.
var isValid = function (s) {
  const hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (const char of s) {
    if (char in hash) stack.push(char);
    else {
      const top = stack.pop();
      if (top === undefined || hash[top] !== char) {
        return false;
      }
    }
  }

  return !stack.length;
};

// TS
// Runtime: 76 ms, faster than 96.60% of TypeScript online submissions for Valid Parentheses.
// Memory Usage: 40.4 MB, less than 48.64% of TypeScript online submissions for Valid Parentheses.
function isValid(s: string): boolean {
  const hash: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack: string[] = [];

  for (const char of s) {
    if (char in hash) stack.push(char);
    else {
      const top = stack.pop();
      if (top === undefined || hash[top] !== char) {
        return false;
      }
    }
  }

  return !stack.length;
}
