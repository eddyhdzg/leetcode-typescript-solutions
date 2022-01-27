// JS
var buildArray = function (target, n) {
  const res = [];
  const flag = Math.min(target[target.length - 1], n);
  for (let i = 1; i <= flag; i++) {
    res.push('Push');
    if (!target.includes(i)) res.push('Pop');
  }

  return res;
};

// TS
function buildArray(target: number[], n: number): string[] {
  const res: ('Push' | 'Pop')[] = [];
  const flag = Math.min(target[target.length - 1], n);
  for (let i = 1; i <= flag; i++) {
    res.push('Push');
    if (!target.includes(i)) res.push('Pop');
  }

  return res;
}
