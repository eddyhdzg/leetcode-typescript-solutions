const hash: { [key: string]: string[] } = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
  if (!digits) return [];

  const visited = new Set<string>();
  const res: string[] = [];

  const helper = (s: string, left: string) => {
    if (visited.has(s)) return;
    visited.add(s);

    if (!left) {
      res.push(s);
      return;
    }

    const newLeft = left.slice(1);

    hash[left[0]].forEach((c) => {
      helper(s + c, newLeft);
    });
  };

  helper('', digits);
  return res;
}
