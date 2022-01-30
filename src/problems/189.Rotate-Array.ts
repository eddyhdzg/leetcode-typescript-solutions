function rotate(nums: number[], k: number): void {
  let i = k % nums.length;
  while (i) {
    nums.unshift(nums.pop()!);
    i--;
  }
}
