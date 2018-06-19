module.exports = knapsackBottomUp = (items, W) => {
  let D = [0];
  for (let i = 1; i <= W; i++) {
    D[i] = 0;
    for (let j = 0; j < items.length; j++) {
      if (items[j][0] <= i) {
        D[i] = Math.max(D[i - items[j][0]]+items[j][1], D[i]);
      }
    }
  }
  return D[W];
};