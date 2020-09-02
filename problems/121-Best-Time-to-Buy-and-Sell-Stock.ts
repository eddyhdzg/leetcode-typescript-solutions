// @ts-ignore
function maxProfit(prices: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;

  prices.forEach((price) => {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  });

  return max;
}
