// Binary Search
// Runtime: 156 ms, faster than 5.70% of JavaScript online submissions for Binary Search.
// Memory Usage: 40 MB, less than 33.97% of JavaScript online submissions for Binary Search.

function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) l = mid + 1;
    else r = mid;
  }

  return nums[l] === target ? l : -1;
}
