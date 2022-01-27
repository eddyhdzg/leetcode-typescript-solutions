function minimumLengthEncoding(words: string[]): number {
  const set = new Set(words);
  for (const word of words)
    if (set.has(word))
      for (let i = 1; i < word.length; i++) set.delete(word.slice(i));
  return Array.from(set).join().length + 1;
}
