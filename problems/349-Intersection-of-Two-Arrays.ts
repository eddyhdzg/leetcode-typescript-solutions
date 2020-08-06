// 1 Set and 1 Filter
// Runtime: 56 ms, faster than 99.63% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 34.1 MB, less than 86.81% of JavaScript online submissions for Intersection of Two Arrays.

function intersection(nums1: number[], nums2: number[]): number[] {
  return [...new Set(nums1.filter((num) => nums2.includes(num)))];
}

// 2 Sets 1 filter
// Runtime: 72 ms, faster than 75.69% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 37.8 MB, less than 9.89% of JavaScript online submissions for Intersection of Two Arrays.

function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter((num) => set2.has(num));
}

// 2 Sets and 2 forEach
// Runtime: 112 ms, faster than 10.61% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 37 MB, less than 21.98% of JavaScript online submissions for Intersection of Two Arrays.

function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set();
  const res = new Set<number>();
  nums1.forEach((num) => set.add(num));
  nums2.forEach((num) => {
    if (set.has(num)) res.add(num);
  });
  return [...res];
}
