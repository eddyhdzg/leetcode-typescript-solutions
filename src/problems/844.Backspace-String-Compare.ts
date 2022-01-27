const helper = (str: string) => {
  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '#') stack.pop();
    else stack.push(str.charAt(i));
  }

  return stack.join('');
};

function backspaceCompare(s: string, t: string): boolean {
  return helper(s) === helper(t);
}
