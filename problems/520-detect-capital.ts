// Runtime: 76 ms, faster than 82.72% of JavaScript online submissions for Detect Capital.
// Memory Usage: 37.4 MB, less than 25.00% of JavaScript online submissions for Detect Capital.

function detectCapitalUse(word: string) {
  var pascalCase = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return (
    word === pascalCase || word === word.toLocaleLowerCase() || word === word.toLocaleUpperCase()
  );
}
