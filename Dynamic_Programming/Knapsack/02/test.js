const assert = require('assert');
const ksBottomUp = require('./knapsackBU.js');
const ksTopDown = require('./knapsackTD.js');

describe('Knapsack Bottom Up Upproach. Infinite items version.', function() {
  it('Items: [[6, 30], [3, 14], [4, 16], [2, 9]] Weight: 10', function() {
    assert.equal(ksBottomUp([[6, 30], [3, 14], [4, 16], [2, 9]], 10), 48);
  });
});

describe('Knapsack Top Down Upproach. Infinite items version.', function() {
  it('Items: [[6, 30], [3, 14], [4, 16], [2, 9]] Weight: 10', function() {
    assert.equal(ksTopDown([[6, 30], [3, 14], [4, 16], [2, 9]], 10), 48);
  });
});