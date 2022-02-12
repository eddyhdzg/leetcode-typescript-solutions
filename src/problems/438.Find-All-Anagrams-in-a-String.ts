function findAnagrams(s: string, p: string): number[] {
  const res: number[] = [];
  const hash: { [key: string]: number } = {};

  const isAnagrams = () => {
    return Object.values(hash).every((value) => value === 0);
  };

  for (const char of p) {
    if (!(char in hash)) {
      hash[char] = 0;
    }
    hash[char]++;
  }

  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (s[right] in hash) {
      hash[s[right]]--;
    }
    right++;

    if (right - left === p.length) {
      if (isAnagrams()) res.push(left);
      if (s[left] in hash) {
        hash[s[left]]++;
      }
      left++;
    }
  }

  return res;
}
