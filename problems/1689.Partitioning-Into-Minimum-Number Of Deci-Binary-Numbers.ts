// TS
function minPartitions(n: string): number {
  return Math.max(...n.split('').map(Number));
}

// JS
// var minPartitions = function (n) {
//   return Math.max(...n.split(''));
// };
