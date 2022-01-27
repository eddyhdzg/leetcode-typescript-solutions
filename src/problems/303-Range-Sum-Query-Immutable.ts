class NumArray {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(i: number, j: number): number {
    let sum = 0;
    for (let k = i; k <= j; k++) {
      sum += this.nums[k];
    }
    return sum;
  }
}
class NumArray {
  sums: number[];

  constructor(nums: number[]) {
    this.sums = nums;
    for (let i = 1; i < nums.length; i++) {
      this.sums[i] += this.sums[i - 1];
    }
    this.sums.unshift(0);
  }

  sumRange(i: number, j: number): number {
    return this.sums[j + 1] - this.sums[i];
  }
}
