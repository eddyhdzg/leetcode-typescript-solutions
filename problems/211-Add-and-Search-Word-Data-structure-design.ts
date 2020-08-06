// Runtime: 228 ms, faster than 69.38% of JavaScript online submissions for Add and Search Word - Data structure design.
// Memory Usage: 55.8 MB, less than 61.90% of JavaScript online submissions for Add and Search Word - Data structure design.

class WordDictionary {
  isWord: boolean;

  child: { [Key: string]: WordDictionary };

  constructor() {
    this.child = {};
    this.isWord = false;
  }

  addWord(word: string): void {
    let curr: WordDictionary = this;
    for (const char of word) {
      if (!curr.child[char]) {
        curr.child[char] = new WordDictionary();
      }
      curr = curr.child[char];
    }
    curr.isWord = true;
  }

  search(word: string, i = 0): boolean {
    let curr: WordDictionary = this;

    while (i < word.length) {
      const char = word[i];
      if (char === '.') {
        for (const key in curr.child) {
          if (curr.child[key].search(word, i + 1)) {
            return true;
          }
        }
        return false;
      }

      if (!curr.child[char]) {
        return false;
      }
      curr = curr.child[char];
    }

    return curr.isWord;
  }
}
