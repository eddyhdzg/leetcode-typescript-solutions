class NestedIterator {
  list: number[];
  index: number;
  constructor(nestedList: NestedInteger[]) {
    this.list = [];
    this.index = 0;
    this.flatten(nestedList);
  }

  flatten(nestedList: NestedInteger[]): void {
    while (nestedList.length) {
      const curr = nestedList.shift();
      if (curr.isInteger()) {
        this.list.push(curr.getInteger());
      } else this.flatten(curr.getList());
    }
  }

  hasNext(): boolean {
    return this.index < this.list.length;
  }

  next(): number {
    return this.list[this.index++];
  }
}
