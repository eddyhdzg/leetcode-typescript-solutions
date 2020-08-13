// Runtime: 108 ms, faster than 100.00% of TypeScript online submissions for Iterator for Combination.
// Memory Usage: 46.7 MB, less than 100.00% of TypeScript online submissions for Iterator for Combination.

class CombinationIterator {
  private characters: string;
  private combinationLength: number;
  private combinations: string[];
  private size: number;
  private current: number;

  constructor(characters: string, combinationLength: number) {
    this.characters = characters;
    this.combinationLength = combinationLength;
    this.current = 0;
    this.combinations = [];
    this.generateCombinations([], this.characters.split(''));
    this.size = this.combinations.length;
  }

  private generateCombinations(
    have: string[] = [],
    stack: string[] = []
  ): void {
    if (have.length >= this.combinationLength) {
      this.combinations.push(have.join(''));
      return;
    }

    for (let i = 0; i < stack.length; i++) {
      const newStack = stack.filter((_, index) => index > i);
      this.generateCombinations([...have, stack[i]], newStack);
    }
  }

  next(): string {
    return this.combinations[this.current++];
  }

  hasNext(): boolean {
    return this.current < this.size;
  }
}
