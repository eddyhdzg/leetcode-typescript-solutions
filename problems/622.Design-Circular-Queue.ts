class MyCircularQueue {
  queue: number[];
  k: number;
  count: number;
  head: number;

  constructor(k: number) {
    this.queue = Array(k).fill(null);
    this.k = k;
    this.count = 0;
    this.head = 0;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.queue[(this.head + this.count) % this.k] = value;
    this.count++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this.count--;
    this.head = (this.head + 1) % this.k;
    return true;
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.queue[this.head];
  }

  Rear(): number {
    return this.isEmpty()
      ? -1
      : this.queue[(this.head + this.count - 1) % this.k];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.k;
  }
}

/**
//  * @param {number} k
//  */
// var MyCircularQueue = function (k) {
//   this.queue = Array(k).fill(null);
//   this.k = k;
//   this.count = 0;
//   this.head = 0;
// };

// /**
//  * @param {number} value
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.enQueue = function (value) {
//   if (this.isFull()) return false;
//   this.queue[(this.head + this.count) % this.k] = value;
//   this.count++;
//   return true;
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.deQueue = function () {
//   if (this.isEmpty()) return false;
//   this.count--;
//   this.head = (this.head + 1) % this.k;
//   return true;
// };

// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Front = function () {
//   return this.isEmpty() ? -1 : this.queue[this.head];
// };

// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Rear = function () {
//   return this.isEmpty()
//     ? -1
//     : this.queue[(this.head + this.count - 1) % this.k];
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isEmpty = function () {
//   return this.count === 0;
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isFull = function () {
//   return this.count === this.k;
// };
