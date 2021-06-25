class CustomStack {
  maxSize: number;
  stack: number[];
  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop(): number {
    return this.stack.pop() ?? -1;
  }

  increment(k: number, val: number): void {
    const j = Math.min(k, this.stack.length);
    for (let i = 0; i < j; i++) {
      this.stack[i] += val;
    }
  }
}
