function maxArea(
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[]
): number {
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  horizontalCuts.unshift(0);
  verticalCuts.unshift(0);
  horizontalCuts.push(h);
  verticalCuts.push(w);

  let hMax = 0;
  let vMax = 0;

  for (let i = 1; i < verticalCuts.length; i++) {
    hMax = Math.max(hMax, verticalCuts[i] - verticalCuts[i - 1]);
  }

  for (let i = 1; i < horizontalCuts.length; i++) {
    vMax = Math.max(vMax, horizontalCuts[i] - horizontalCuts[i - 1]);
  }

  return (hMax * vMax) % (1e9 + 7);
}
