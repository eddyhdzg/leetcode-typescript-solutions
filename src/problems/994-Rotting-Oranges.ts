// Runtime: 96 ms, faster than 56.05% of JavaScript online submissions for Rotting Oranges.
// Memory Usage: 38.9 MB, less than 71.89% of JavaScript online submissions for Rotting Oranges.

function orangesRotting(grid: number[][]): number {
  let minutes = 0;
  const directions: { x: number; y: number }[] = [
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
  ];

  const freshArray: string[] = [];
  const rottenArray: string[] = [];

  grid.forEach((row, rowIndex) => {
    row.forEach((val, gridIndex) => {
      if (val === 1) {
        freshArray.push(rowIndex.toString(10) + gridIndex.toString(10));
      } else if (val === 2) {
        rottenArray.push(rowIndex.toString(10) + gridIndex.toString(10));
      }
    });
  });

  const rot = (i: string, j: string) => {
    const val = i + j;
    const index = freshArray.indexOf(val);
    if (index !== -1) {
      const removed: string[] = freshArray.splice(index, 1);
      rottenArray.push(removed[0]);
    }
  };

  let flag = 0;
  while (freshArray.length > 0 && freshArray.length !== flag) {
    flag = freshArray.length;
    minutes++;
    rottenArray.forEach((rotten) => {
      const i = parseInt(rotten[0]);
      const j = parseInt(rotten[1]);
      directions.forEach(({ x, y }) =>
        rot((i + x).toString(10), (j + y).toString(10))
      );
    });
  }

  return freshArray.length > 0 ? -1 : minutes;
}
