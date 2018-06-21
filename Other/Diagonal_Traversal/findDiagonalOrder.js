/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var findDiagonalOrder = function(matrix) {
    if (!matrix.length) return [];
    
    const m = matrix.length, n = matrix[0].length;
    let res = [], r = 0, c = 0;
    
    for (let i = 0; i < m*n; i++) {
        res.push(matrix[r][c]);
        if ((r+c)%2 === 0) {
            if (c === n-1) { r++; }
            else if (r === 0) { c++; }
            else { r--; c++; }
        } else {
            if (r === m-1) { c++; }
            else if (c === 0) { r++; }
            else { r++; c--; }
        }
    }

    return res;
};