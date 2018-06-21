// THIS:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// INTO THIS:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

var rotate = function(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  matrix.map(row => row.reverse());
  return matrix;
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);