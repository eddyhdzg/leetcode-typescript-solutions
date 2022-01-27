const sortString = (str: string) => [...str].sort().join('');

function groupAnagrams(strs: string[]): string[][] {
  const hash: { [key: string]: string[] } = {};

  for (const str of strs) {
    const sortedStr = sortString(str);
    if (!(sortedStr in hash)) {
      hash[sortedStr] = [];
    }
    hash[sortedStr].push(str);
  }

  return Object.values(hash);
}
