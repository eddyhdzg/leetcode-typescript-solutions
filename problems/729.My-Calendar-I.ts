class MyCalendar {
  intervals: [number, number][];
  constructor() {
    this.intervals = [];
  }

  insert(start: number, end: number, index: number): void {
    this.intervals.splice(index, 0, [start, end]);
  }

  book(start: number, end: number): boolean {
    let i = 0;
    while (i < this.intervals.length && end < this.intervals[i][1]) {
      const [a, b] = this.intervals[i];

      if (start <= a && end >= b) return false; // Outer
      if (start >= a && end <= b) return false; // Inner
      if (start <= a && end > a) return false; // A
      if (start < b && end >= b) return false; // B
      i++;
    }

    this.insert(start, end, i);

    return true;
  }
}
