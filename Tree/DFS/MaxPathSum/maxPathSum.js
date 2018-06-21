var maxPathSum = function(root) {
  let max = -Infinity;
  
  function findMax(node) {
      if (node === null) {
          return 0;
      }
      const left = Math.max(0, findMax(node.left));
      const right = Math.max(0, findMax(node.right));
      
      max = Math.max(max, left+right+node.val);
      return node.val + Math.max(left, right);
  }
  
  findMax(root);
  return max;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let t1 = new TreeNode(10);
let t2 = t1.right = new TreeNode(20);
let t3 = t1.left = new TreeNode(9);

let t4 = t2.right = new TreeNode(7);
let t5 = t2.left = new TreeNode(15);

let t6 = t3.right = new TreeNode(5000);
let t7 = t3.left = new TreeNode(10);

console.log(t1);
console.log(maxPathSum(t1));