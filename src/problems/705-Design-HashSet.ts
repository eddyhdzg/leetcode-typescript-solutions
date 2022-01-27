// Runtime: 180 ms, faster than 85.27% of JavaScript online submissions for Design HashSet.
// Memory Usage: 45.3 MB, less than 6.67% of JavaScript online submissions for Design HashSet.

type Hash = {
  [key: string]: true | undefined;
};

class MyHashSet {
  private hash: Hash = {};

  constructor() {
    this.hash = {};
  }

  add(key: number): void {
    this.hash[key] = true;
  }

  remove(key: number): void {
    delete this.hash[key];
  }

  contains(key: number): boolean {
    return !!this.hash[key];
  }
}
