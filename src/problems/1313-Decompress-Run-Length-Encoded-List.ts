// Runtime: 84 ms, faster than 95.38% of JavaScript online submissions for Decompress Run-Length Encoded List.
// Memory Usage: 37.5 MB, less than 99.75% of JavaScript online submissions for Decompress Run-Length Encoded List.

function decompressRLElist(nums: number[]): number[] {
  const res = [];

  for (let i = 0; i < nums.length - 1; i += 2) {
    res.push(...new Array(nums[i]).fill(nums[i + 1]));
  }

  return res;
}
