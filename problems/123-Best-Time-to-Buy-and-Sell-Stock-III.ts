// Runtime: 96 ms, faster than 45.28% of JavaScript online submissions for Best Time to Buy and Sell Stock III.
// Memory Usage: 38.8 MB, less than 49.81% of JavaScript online submissions for Best Time to Buy and Sell Stock III.

function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;

  let leftMin = Number.MAX_SAFE_INTEGER;
  let rightMax = Number.MIN_SAFE_INTEGER;
  let leftProfit = 0;
  let rightProfit = 0;
  const leftArray: number[] = new Array(prices.length);
  const rightArray: number[] = new Array(prices.length);

  for (let i = 0; i < prices.length; i++) {
    leftMin = Math.min(leftMin, prices[i]);
    leftProfit = Math.max(leftProfit, prices[i] - leftMin);
    leftArray[i] = leftProfit;

    rightMax = Math.max(rightMax, prices[prices.length - 1 - i]);
    rightProfit = Math.max(
      rightProfit,
      rightMax - prices[prices.length - 1 - i]
    );
    rightArray[prices.length - 1 - i] = rightProfit;
  }

  const mergedArray = leftArray.map(
    (leftValue, i) => leftValue + rightArray[i]
  );

  return Math.max(...mergedArray);
}
