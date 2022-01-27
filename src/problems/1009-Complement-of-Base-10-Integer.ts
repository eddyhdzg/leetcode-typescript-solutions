function bitwiseComplement(N: number): number {
  const complement = parseInt('1'.repeat(N.toString(2).length), 2);
  return N ^ complement;
}
