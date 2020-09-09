function partitionLabels(S: string): number[] {
  const last: number[] = new Array(26).fill(-1);

  S.split('').forEach((char, i) => {
    last[char.charCodeAt(0) - 97] = i;
  });

  const partitions = [];
  let anchor = 0;
  let end = 0;

  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, last[S.charCodeAt(i) - 'a'.charCodeAt(0)]);
    if (i === end) {
      partitions.push(i - anchor + 1);
      anchor = i + 1;
    }
  }

  return partitions;
}
