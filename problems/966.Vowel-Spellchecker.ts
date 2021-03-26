const regex = /[aeiou]/g;

function spellchecker(wordlist: string[], queries: string[]): string[] {
  const orig = new Set(wordlist);
  const lower = new Map();
  const mask = new Map();

  for (let i = wordlist.length - 1; ~i; i--) {
    const word = wordlist[i];
    const wlow = word.toLowerCase();
    lower.set(wlow, word);
    mask.set(wlow.replace(regex, '*'), word);
  }

  return queries.map((query) => {
    if (orig.has(query)) return query;
    const qlow = query.toLowerCase();
    const qmask = qlow.replace(regex, '*');
    return lower.get(qlow) || mask.get(qmask) || '';
  });
}
