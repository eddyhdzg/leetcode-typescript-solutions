function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  const dif = Math.abs(arr[1] - arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== dif) return false;
  }

  return true;
}
