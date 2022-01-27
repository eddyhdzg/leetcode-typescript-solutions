// TS
function smallestDivisor(nums: number[], threshold: number): number {
  let l = 1;
  let r = Math.max(...nums);

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    const sum = nums.reduce((acc, num) => acc + Math.ceil(num / mid), 0);

    if (sum > threshold) l = mid + 1;
    else r = mid;
  }

  return l;
}

// JS
// var smallestDivisor = function (nums, threshold) {
//   let l = 1;
//   let r = Math.max(...nums);

//   while (l < r) {
//     const mid = Math.floor((l + r) / 2);
//     const sum = nums.reduce((acc, num) => acc + Math.ceil(num / mid), 0);

//     if (sum > threshold) l = mid + 1;
//     else r = mid;
//   }

//   return l;
// };
