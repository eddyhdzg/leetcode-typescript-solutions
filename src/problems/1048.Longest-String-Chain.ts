function longestStrChain(words: string[]): number {
  words.sort((a, b) => a.length - b.length);
  const hash: { [key: string]: number } = {};

  words.forEach((word) => {
    hash[word] = 1;

    for (let i = 0; i < word.length; i++) {
      const prev = word.slice(0, i) + word.slice(i + 1);
      if (prev in hash) {
        hash[word] = Math.max(hash[word], hash[prev] + 1);
      }
    }
  });

  return Math.max(...Object.values(hash));
}
