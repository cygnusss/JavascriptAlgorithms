var init = function(n) {
  let out = [];
  for (let i = 0; i < n; i++) {
      out.push(null);
  }
  return out;
}

var largestDivisibleSubset = function(nums) {
  if (nums.length < 2) {
      return nums;
  } else {
      nums.sort((a,b) => a-b);
      let parent = init(nums.length);
      let count = init(nums.length);
      let max = 0, maxind = -1;
      
      for (let i = nums.length-1; i >= 0; i--) {
          for (let j = i; j < nums.length; j++) {
              if (nums[j]%nums[i] === 0 && count[i] < 1 + count[j]) {
                  count[i] = 1 + count[j];
                  parent[i] = j;
                  if (count[i] > max) {
                      max = count[i];
                      maxind = i;
                  }
              }
          }
      }
      
      let res = [];
      for (let i = 0; i < max; i++) {
          res.push(nums[maxind]);
          maxind = parent[maxind];
          console.log(nums[maxind])
      }
      return res;
  }
}