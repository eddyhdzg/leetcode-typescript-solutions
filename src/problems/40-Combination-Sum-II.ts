// Runtime: 112 ms, faster than 37.50% of TypeScript online submissions for Combination Sum II.
// Memory Usage: 43.1 MB, less than 25.00% of TypeScript online submissions for Combination Sum II.

function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  candidates.sort((a, b) => a - b);

  const combinationSum2Helper = (
    nums: number[] = [],
    lastIndex: number = 0,
    sum: number = 0
  ) => {
    if (sum > target) return;
    if (sum === target) res.push(nums);
    const visited = new Set<number>();

    for (let i = lastIndex; i < candidates.length; i++) {
      if (!visited.has(candidates[i])) {
        combinationSum2Helper(
          [...nums, candidates[i]],
          i + 1,
          sum + candidates[i]
        );
        visited.add(candidates[i]);
      }
    }
  };

  combinationSum2Helper();

  return res;
}
