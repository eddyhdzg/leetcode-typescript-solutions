const findAndReplacePatternHelper = (word: string, pattern: string) => {
  const wHash: { [key: string]: string } = {};
  const pHash: { [key: string]: string } = {};

  for (let i = 0; i < pattern.length; i++) {
    const cW = word[i];
    const cP = pattern[i];

    if (
      (cW in wHash && wHash[cW] !== cP) ||
      (cP in pHash && pHash[cP] !== cW)
    ) {
      return false;
    }

    wHash[cW] = cP;
    pHash[cP] = cW;
  }

  return true;
};

function findAndReplacePattern(words: string[], pattern: string): string[] {
  return words.filter((word) => findAndReplacePatternHelper(word, pattern));
}
