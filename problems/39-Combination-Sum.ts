// Sol 1
// Runtime: 100 ms, faster than 70.27% of TypeScript online submissions for Combination Sum.
// Memory Usage: 44.1 MB, less than 37.84% of TypeScript online submissions for Combination Sum.
function combinationSum(candidates: number[], target: number): number[][] {
  return combinationSumHelper(candidates, target, [], []);
}

function combinationSumHelper(
  candidates: number[],
  target: number,
  curr: number[],
  combinations: number[][]
): number[][] {
  const currSum = curr.reduce((acc, num) => acc + num, 0);

  if (currSum === target) {
    combinations.push(curr);
  }

  if (currSum < target) {
    candidates.forEach((candidate) => {
      if (!curr.length || curr[curr.length - 1] >= candidate) {
        combinationSumHelper(
          candidates,
          target,
          [...curr, candidate],
          combinations
        );
      }
    });
  }

  return combinations;
}

// Sol 2
// Runtime: 124 ms, faster than 48.65% of TypeScript online submissions for Combination Sum.
// Memory Usage: 44 MB, less than 43.24% of TypeScript online submissions for Combination Sum.

// function combinationSum(candidates: number[], target: number): number[][] {
//   const res: number[][] = [];
//   function permute(arr: number[] = [], sum: number = 0, idx: number = 0) {
//     if (sum > target) return;
//     if (sum === target) res.push(arr);

//     for (let i = idx; i < candidates.length; i++) {
//       permute([...arr, candidates[i]], sum + candidates[i], i);
//     }
//   }

//   permute();
//   return res;
// }
