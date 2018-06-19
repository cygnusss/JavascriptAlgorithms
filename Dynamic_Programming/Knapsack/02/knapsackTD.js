let cache = {};
module.exports = knapsackTopDown = (items, W) => {
  if (!cache.hasOwnProperty(W)) {
    let v = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i][0] <= W) {
        v = Math.max(v, knapsackTopDown(items, W-items[i][0])+items[i][1]);
      }
    }
    cache[W] = v;
  }
  return cache[W];
};