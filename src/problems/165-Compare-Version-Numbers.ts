// Runtime: 72 ms, faster than 81.43% of JavaScript online submissions for Compare Version Numbers.
// Memory Usage: 36.8 MB, less than 21.21% of JavaScript online submissions for Compare Version Numbers.

function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split('.').map((str) => parseInt(str));
  const v2 = version2.split('.').map((str) => parseInt(str));

  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const currV1 = v1[i] || 0;
    const currV2 = v2[i] || 0;

    if (currV1 > currV2) return 1;
    if (currV1 < currV2) return -1;
  }

  return 0;
}

// Making arrays of same length
// Runtime: 76 ms, faster than 64.72% of JavaScript online submissions for Compare Version Numbers.
// Memory Usage: 36.6 MB, less than 53.05% of JavaScript online submissions for Compare Version Numbers.
// function compareVersion(version1: string, version2: string): number {
//   const v1 = version1.split('.').map((str) => parseInt(str));
//   const v2 = version2.split('.').map((str) => parseInt(str));

//   while (v1.length !== v2.length) {
//     if (v1.length < v2.length) {
//       v1.push(0);
//     } else {
//       v2.push(0);
//     }
//   }

//   for (let i = 0; i < v1.length; i++) {
//     if (v1[i] > v2[i]) return 1;
//     if (v1[i] < v2[i]) return -1;
//   }

//   return 0;
// }
