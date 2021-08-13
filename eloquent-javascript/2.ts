const minimum = (a: number, b: number) => {
  return a < b ? a : b;
};

const recursion = (num: number): 'even' | 'odd' => {
  if (num === 0) return 'even';
  if (Math.abs(num) === 1) return 'odd';
  return recursion(Math.abs(num) - 2);
};

const countChar = (s: string, char: string) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === char) count++;
  }

  return count;
};

const beanCounting = (s: string) => {
  return countChar(s, 'B');
};
