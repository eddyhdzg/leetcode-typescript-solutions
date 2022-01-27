const evaluate: { [key: string]: (a: number, b: number) => number } = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => Math.trunc(a / b),
};

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  while (tokens.length) {
    const t = tokens.shift()!;
    if (t in evaluate) {
      const b = stack.pop()!;
      const a = stack.pop()!;
      stack.push(evaluate[t](a, b));
    } else stack.push(Math.trunc(Number(t)));
  }

  return stack[0];
}
