function removeDuplicates(S: string): string {
  const stack: string[] = [];

  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === stack[stack.length - 1]) stack.pop();
    else stack.push(S.charAt(i));
  }

  return stack.join('');
}
