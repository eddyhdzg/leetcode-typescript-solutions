// TS
// Runtime: 100 ms, faster than 66.67% of TypeScript online submissions for Set Mismatch.
// Memory Usage: 44.5 MB, less than 100.00% of TypeScript online submissions for Set Mismatch.
function findErrorNums(nums: number[]): number[] {
  let twice = 0;
  let missing = 0;
  const hash: { [key: number]: boolean } = {};

  for (let num of nums) {
    if (num in hash) twice = num;
    else hash[num] = true;
  }

  let i = 1;
  while (!missing) {
    if (!(i in hash)) missing = i;
    else i++;
  }

  return [twice, missing];
}

// JS
// Runtime: 88 ms, faster than 89.16% of JavaScript online submissions for Set Mismatch.
// Memory Usage: 43.6 MB, less than 51.81% of JavaScript online submissions for Set Mismatch.
// var findErrorNums = function (nums) {
//   let twice = 0;
//   let missing = 0;
//   const hash = {};

//   for (let num of nums) {
//     if (num in hash) twice = num;
//     else hash[num] = true;
//   }

//   let i = 1;
//   while (!missing) {
//     if (!(i in hash)) missing = i;
//     else i++;
//   }

//   return [twice, missing];
// };
