// Method 1
var minOperations = function (n) {
  let res = 0;
  for (let i = 0; i < n / 2; i++) {
    res += n - (2 * i + 1);
  }
  return res;
};

// Method 2 - Math
var minOperations = function (n) {
  return Math.floor(n ** 2 / 4);
};
