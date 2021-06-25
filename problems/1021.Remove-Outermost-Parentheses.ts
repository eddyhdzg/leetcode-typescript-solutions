function removeOuterParentheses(s: string): string {
  let counter = 0;
  let res = '';

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      if (counter) res += s.charAt(i);
      counter++;
    }
    if (s.charAt(i) === ')') {
      if (counter > 1) res += s.charAt(i);
      counter--;
    }
  }

  return res;
}
