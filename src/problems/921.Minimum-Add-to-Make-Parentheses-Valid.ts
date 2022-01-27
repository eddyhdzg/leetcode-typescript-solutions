function minAddToMakeValid(s: string): number {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (
      stack.length &&
      s.charAt(i) === ')' &&
      stack[stack.length - 1] === '('
    ) {
      stack.pop();
    } else {
      stack.push(s.charAt(i));
    }
  }

  return stack.length;
}
