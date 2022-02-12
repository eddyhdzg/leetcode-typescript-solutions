function findTheDifference(s: string, t: string): string {
  const sArray = new Array(26).fill(0);
  const tArray = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    sArray[s[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < t.length; i++) {
    tArray[t[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if (sArray[i] !== tArray[i]) {
      return String.fromCharCode(i + 97);
    }
  }

  return "";
}
