function distributeCandies(candyType: number[]): number {
  return Math.min(new Set<number>(candyType).size, candyType.length / 2);
}
