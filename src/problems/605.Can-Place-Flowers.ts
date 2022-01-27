// TS
// Runtime: 88 ms, faster than 85.71% of TypeScript online submissions for Can Place Flowers.
// Memory Usage: 40.9 MB, less than 14.29% of TypeScript online submissions for Can Place Flowers.
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  const last = flowerbed.length - 1;

  if (flowerbed[0] === 0 && flowerbed[1] !== 1) {
    count++;
    flowerbed[0] = 1;
  }

  if (flowerbed[last] === 0 && flowerbed[last - 1] !== 1) {
    count++;
    flowerbed[last] = 1;
  }

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      count++;
      flowerbed[i] = 1;
      i++;
    }
  }

  return count >= n;
}

// JS
// Runtime: 96 ms, faster than 21.79% of JavaScript online submissions for Can Place Flowers.
// Memory Usage: 40.4 MB, less than 82.68% of JavaScript online submissions for Can Place Flowers.
// var canPlaceFlowers = function (flowerbed, n) {
//   let count = 0;
//   const last = flowerbed.length - 1;

//   if (flowerbed[0] === 0 && flowerbed[1] !== 1) {
//     count++;
//     flowerbed[0] = 1;
//   }

//   if (flowerbed[last] === 0 && flowerbed[last - 1] !== 1) {
//     count++;
//     flowerbed[last] = 1;
//   }

//   for (let i = 1; i < flowerbed.length - 1; i++) {
//     if (
//       flowerbed[i - 1] === 0 &&
//       flowerbed[i] === 0 &&
//       flowerbed[i + 1] === 0
//     ) {
//       count++;
//       flowerbed[i] = 1;
//       i++;
//     }
//   }

//   return count >= n;
// };
