/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (root) {
      console.log(root)
      let q = [root];
      let lim = q.length;
      while (q.length) {
          for (let i = q.length-1; i >= 0; i--) {
              q[i].next = q[i-1] || null;
          }
          while (lim) {
              if (q[q.length-1].left != null) {
                  q.unshift(q[q.length-1].left);
              }
              if (q[q.length-1].right != null) {
                  q.unshift(q[q.length-1].right);
              }
              lim--;
              q.pop();
          }
          lim = q.length;
      }
  }
};