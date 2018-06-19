module.exports = knapsack = (items, W) => {
  let D = [];
  for (let i = 0; i <= W; i++) {
    D.push([0]);
  }

  for (let i = 0; i <= items.length; i++) {
    D[0][i] = 0;
  }

  for (let i = 1; i <= W; i++) {
    for (let j = 1; j <= items.length; j++) {
      D[i][j] = 0;
      const index = j-1;
      if (items[index][0] <= i) {
        D[i][j] = Math.max(D[i][j-1], D[i-items[index][0]][j-1] + items[index][1]);
      }
    }
  }

  return D[W][items.length];
};