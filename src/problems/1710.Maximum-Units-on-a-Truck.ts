function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort(([, a], [, b]) => b - a);
  let res = 0;
  let i = 0;

  while (truckSize && i < boxTypes.length) {
    const count = Math.min(boxTypes[i][0], truckSize);
    res += count * boxTypes[i][1];
    truckSize -= count;
    i++;
  }

  return res;
}
