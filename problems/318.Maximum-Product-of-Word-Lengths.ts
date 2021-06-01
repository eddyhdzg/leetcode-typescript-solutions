function maxProduct(words: string[]): number {
  let res = 0;
  words.sort((a, b) => a.length - b.length);

  const hash: {
    [key: string]: {
      chars: Set<string>;
    };
  } = {};

  words.forEach((word) => {
    hash[word] = {
      chars: new Set(word),
    };
  });

  for (let i = 0; i < words.length; i++) {
    const w1 = words[i];
    for (let j = i + 1; j < words.length; j++) {
      const w2 = words[j];

      const intersection = [...hash[w1].chars].filter((c) =>
        hash[w2].chars.has(c)
      );
      if (!intersection.length) {
        res = Math.max(res, w1.length * w2.length);
      }
    }
  }

  return res;
}
