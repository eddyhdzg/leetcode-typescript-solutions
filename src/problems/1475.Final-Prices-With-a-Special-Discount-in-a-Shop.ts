function finalPrices(prices: number[]): number[] {
  const getDiscount = (i: number) => {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        return prices[i] - prices[j];
      }
    }

    return prices[i];
  };

  return prices.map((_, i) => getDiscount(i));
}
