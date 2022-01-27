function brokenCalc(X: number, Y: number): number {
  if (X >= Y) return X - Y;
  if (!(Y % 2)) return 1 + brokenCalc(X, Y / 2);
  return 1 + brokenCalc(X, Y + 1);
}
