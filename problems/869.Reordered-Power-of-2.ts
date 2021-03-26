var reorderedPowerOf2 = function (N) {
  const set = new Set<string>();
  for (let cur = 1; cur < 10 ** 9; cur *= 2) set.add(String(cur));

  const validate = (left: string, cur: string = '') => {
    if (left.length === 1) return set.has(cur + left[0]);
    for (let i = 0; i < left.length; i++) {
      const next = left.slice(0, i) + left.slice(i + 1);
      if (validate(next, cur + left[i])) return true;
    }
    return false;
  };

  return validate(String(N));
};
