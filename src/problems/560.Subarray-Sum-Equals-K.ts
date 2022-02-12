function subarraySum(nums: number[], k: number): number {
  const hash: { [sum: string]: number } = { 0: 1 };
  let sum = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const diff = sum - k;
    if (hash[diff]) res += hash[diff];
    hash[sum] = (hash[sum] ?? 0) + 1;
  }

  return res;
}
