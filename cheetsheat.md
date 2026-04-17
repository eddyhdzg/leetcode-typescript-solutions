# TypeScript Cheatsheet

## Arrays

```ts
Array.from({ length: n }, (_, i) => i);              // [0, n)
Array.from({ length: n }, (_, i) => i + 1);          // [1, n]
Array.from({ length: rows }, () => Array(cols).fill(0)); // 2D (no shared rows!)
```

`slice` = non-mutating copy, `end` exclusive. `splice` = mutates, returns removed.

## Map / Set

```ts
const freq = new Map<string, number>();
freq.set(k, (freq.get(k) ?? 0) + 1);
const seen = new Set<number>();
```

## Data structures

```ts
import { Queue } from "@datastructures-js/queue";
import { Deque } from "@datastructures-js/deque";
import { MinHeap, MaxHeap } from "@datastructures-js/heap";
import { PriorityQueue } from "@datastructures-js/priority-queue";

const pq = new PriorityQueue<[number, number]>((a, b) => a[0] - b[0]);
```

## Sorting

```ts
nums.sort((a, b) => a - b);               // numbers asc
words.sort((a, b) => a.localeCompare(b)); // strings lex
```

## Binary search (lower bound)

```ts
let lo = 0, hi = arr.length;
while (lo < hi) {
  const mid = (lo + hi) >>> 1;
  arr[mid] < target ? (lo = mid + 1) : (hi = mid);
}
```

## Bit tricks

```ts
x & 1         // parity
(a + b) >>> 1 // safe mid
x & (x - 1)   // clear lowest set bit
```

## BigInt

Use when products exceed `2^53 − 1`:

```ts
(BigInt(a) * BigInt(b)) % BigInt(MOD);
```
