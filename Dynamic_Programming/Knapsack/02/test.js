const assert = require('assert');
const ks = require('./knapsack.js');

describe('Knapsack Bottom Up Upproach. Infinite items version.', function() {
  it('Items: [[6, 30], [3, 14], [4, 16], [2, 9]] Weight: 10', function() {
    assert.equal(ks([[6, 30], [3, 14], [4, 16], [2, 9]], 10), 48);
  });
});