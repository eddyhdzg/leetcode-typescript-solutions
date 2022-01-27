// Hash
// Runtime: 88 ms, faster than 69.49% of JavaScript online submissions for Shuffle String.
// Memory Usage: 38.3 MB, less than 49.80% of JavaScript online submissions for Shuffle String.

function restoreString(s: string, indices: number[]): string {
  const hash: { [key: string]: string } = {};

  indices.forEach((num, index) => {
    hash[num] = s[index];
  });

  return Object.values(hash).join('');
}

// One Liner
// Runtime: 92 ms, faster than 56.12% of JavaScript online submissions for Shuffle String.
// Memory Usage: 38.3 MB, less than 48.06% of JavaScript online submissions for Shuffle String.

function restoreString(s: string, indices: number[]): string {
  return indices.map((_, i) => s[indices.indexOf(i)]).join('');
}

// Auxiliary string
// Runtime: 96 ms, faster than 42.96% of JavaScript online submissions for Shuffle String.
// Memory Usage: 38.3 MB, less than 49.49% of JavaScript online submissions for Shuffle String.
function restoreString(s: string, indices: number[]): string {
  let res: string = '';

  for (let i = 0; i < indices.length; i++) {
    res += indices.indexOf(i);
  }

  return res;
}
