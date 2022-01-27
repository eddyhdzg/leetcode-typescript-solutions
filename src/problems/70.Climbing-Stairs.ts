function isSubsequence(s: string, t: string): boolean {
  let j = 0;
  for (let i = 0; i < t.length && j < s.length; i++) {
    if (t[i] === s[j]) j++;
  }

  return j === s.length;
}
