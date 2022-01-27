class Trie {
  child: { [Key: string]: Trie };
  isEnd: boolean;

  constructor() {
    this.child = {};
    this.isEnd = false;
  }

  insert(word: string): void {
    let curr: Trie = this;

    for (const char of word) {
      if (!(char in curr.child)) {
        curr.child[char] = new Trie();
      }
      curr = curr.child[char];
    }
    curr.isEnd = true;
  }

  search(word: string): boolean {
    let curr: Trie = this;

    for (const char of word) {
      if (!(char in curr.child)) {
        return false;
      }
      curr = curr.child[char];
    }

    return curr.isEnd;
  }

  startsWith(prefix: string): boolean {
    let curr: Trie = this;

    for (const char of prefix) {
      if (!(char in curr.child)) {
        return false;
      }
      curr = curr.child[char];
    }

    return true;
  }
}
