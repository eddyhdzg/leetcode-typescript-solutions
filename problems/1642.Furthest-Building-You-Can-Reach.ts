function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number
): number {
  const pq = new MaxPriorityQueue({ priority: (x) => x });

  let i = 0;
  while (i < heights.length) {
    if (heights[i] >= heights[i + 1]) {
      i++;
      continue;
    }

    const diff = heights[i + 1] - heights[i];

    // if not enough bricks are left
    if (diff > bricks) {
      // if not enough ladders are left
      if (ladders === 0) break;

      // if the max bricks used at once > current jump
      // replace the max bricks with a ladder and use those bricks for current jump
      // else use ladder for the current jump
      if (!pq.isEmpty() && pq.front().element > diff) {
        bricks += pq.dequeue().element - diff;
        pq.enqueue(diff);
      }
      ladders--;
    } else {
      bricks -= diff;
      pq.enqueue(diff);
    }
    i++;
  }

  return i;
}
