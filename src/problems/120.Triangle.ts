// Buttom-Up
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; ~i; i--) {
    for (let j = 0; j < triangle.length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};

// Top-Down
var minimumTotal = function (triangle) {
  for (let i = 1; i < triangle.length; i++) {
    triangle[i][0] += triangle[i - 1][0]; // First in row
    triangle[i][i] += triangle[i - 1][i - 1]; // Last in row

    for (let j = 1; j < i; j++) {
      triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
    }
  }

  return Math.min(...triangle[triangle.length - 1]);
};
