// TS
// Runtime: 96 ms, faster than 69.23% of TypeScript online submissions for Gas Station.
// Memory Usage: 38.1 MB, less than 69.23% of TypeScript online submissions for Gas Station.
function canCompleteCircuit(gas: number[], cost: number[]): number {
  const totalGas = gas.reduce((acc, curr) => acc + curr, 0);
  const totalCost = cost.reduce((acc, curr) => acc + curr, 0);

  if (totalCost > totalGas) return -1;

  for (let i = 0; i < gas.length; i++) {
    let currGas = 0;
    let currCost = 0;
    let j = i;

    while (j < gas.length && currGas >= currCost) {
      currGas += gas[j];
      currCost += cost[j];
      j++;
    }

    if (currGas >= currCost) return i;
  }

  return -1;
}
// JS
// Runtime: 92 ms, faster than 52.25% of JavaScript online submissions for Gas Station.
// Memory Usage: 37.3 MB, less than 24.00% of JavaScript online submissions for Gas Station.
// var canCompleteCircuit = function (gas, cost) {
//   const totalGas = gas.reduce((acc, curr) => acc + curr, 0);
//   const totalCost = cost.reduce((acc, curr) => acc + curr, 0);

//   if (totalCost > totalGas) return -1;

//   for (let i = 0; i < gas.length; i++) {
//     let currGas = 0;
//     let currCost = 0;
//     let j = i;

//     while (j < gas.length && currGas >= currCost) {
//       currGas += gas[j];
//       currCost += cost[j];
//       j++;
//     }

//     if (currGas >= currCost) return i;
//   }

//   return -1;
// };
