/**
 * Wikipedia article on Pascal's Triangle: 
 * http://en.wikipedia.org/wiki/Pascal's_triangle
 * Write a function that, given a depth (n), returns a single-dimensional array 
 * representing Pascal's Triangle to the n-th level.
 */

// Recursive version

function pascalsTriangle(n, vals) {
  if (n === 0) return vals;
  return recur(n - 1, [1], [1]);
  
  function recur(n, vals, lastRow) {
    if (n === 0) return vals;
    let newRow = [];
    for (var i = 0; i <= lastRow.length; i++) {
      let a = lastRow[i - 1] ? lastRow[i - 1] : 0;
      let b = lastRow[i] ? lastRow[i] : 0;
      newRow.push(a + b);
    }
    return recur(n - 1, vals.concat(newRow), newRow);
  }
}

// Iterative version

function pascalsTriangleIter(n) {
  if (n === 0) return [];
  if (n === 1) return [1];
  let vals = [1];
  let lastRow = [1];
  while (n - 1 > 0) {
    let row = [];
    for (var i = 0; i <= lastRow.length; i++) {
      let a = lastRow[i-1] ? lastRow[i-1] : 0;
      let b = lastRow[i] ? lastRow[i] : 0;
      row.push(a + b);
    }
    vals = vals.concat(row);
    lastRow = row;
    n--;
  }
  return vals;
}