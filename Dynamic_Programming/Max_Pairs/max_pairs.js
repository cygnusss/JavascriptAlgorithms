/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  let A = 0;
  let min = -Infinity;
  pairs.sort((a,b) => a[1]-b[1]);
  for (let i = 0; i < pairs.length; i++) {
      if (min < pairs[i][0]) {
          min = pairs[i][1];
          A++;
      }
  }
  return A;
};