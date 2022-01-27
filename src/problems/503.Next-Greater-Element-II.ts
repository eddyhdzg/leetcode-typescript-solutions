function nextGreaterElements(nums: number[]): number[] {
  const res: number[] = Array(nums.length).fill(-1);
  const doubleNums = [...nums, ...nums];
  const stack: [number, number][] = []; // [val,index]

  let i = 0;
  while (i < doubleNums.length) {
    while (stack.length && doubleNums[i] > stack[stack.length - 1][0]) {
      const [, stackIndex] = stack.pop()!;
      if (stackIndex < nums.length) {
        res[stackIndex] = doubleNums[i];
      }
    }
    stack.push([doubleNums[i], i]);
    i++;
  }

  return res;
}
