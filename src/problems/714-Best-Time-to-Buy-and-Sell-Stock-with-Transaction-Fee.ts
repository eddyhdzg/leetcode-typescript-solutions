function maxProfit(prices: number[], fee: number): number {
  let buying = 0;
  let selling = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    buying = Math.max(buying, selling + prices[i] - fee);
    selling = Math.max(selling, buying - prices[i]);
  }

  return buying;
}
