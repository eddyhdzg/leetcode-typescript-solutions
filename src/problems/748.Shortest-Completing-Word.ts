// Removes spaces, removes digits, transforms to lowerCase
const converPlate = (s: string) => s.toLowerCase().replace(/\s|\d/g, '');

// Returns an object with the freccuencies
// Example 1: spst => { s: 2, p: 1, t: 1 }
const countLetters = (s: string) => {
  const hash: { [key: string]: number } = {};
  for (const c of s) {
    hash[c] ? hash[c]++ : (hash[c] = 1);
  }

  return hash;
};

// Returns true if the answer is correct
const compareWords = (
  plateArray: [string, number][],
  wordHash: { [key: string]: number }
) => {
  for (let i = 0; i < plateArray.length; i++) {
    const [key, value] = plateArray[i];
    if (!(key in wordHash) || value > wordHash[key]) return false;
  }
  return true;
};

function shortestCompletingWord(licensePlate: string, words: string[]): string {
  words.sort((a, b) => a.length - b.length);
  const lowerPlate = converPlate(licensePlate);
  const plateHash = countLetters(lowerPlate);
  const plateArray = Object.entries(plateHash); // Easier to iterate

  for (const word of words) {
    const wordHash = countLetters(word);
    if (compareWords(plateArray, wordHash)) return word;
  }

  return '';
}
