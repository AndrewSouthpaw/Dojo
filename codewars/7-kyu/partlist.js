/*****************************************************************************
Write a function partlist that gives all the ways to divide a list (an array) 
of at least two elements in two non-empty parts.

    Each two non empty parts will be in a pair (or an array for languages without tuples)
    Each part will be in a string
    Elements of a pair must be in the same order as in the original array.

Example:

a = ["az", "toto", "picaro", "zone", "kiwi"]

[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], 
["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
*****************************************************************************/


/* Functional */

function partlist(arr) {
  return arr.reduce((acc, val, i) => {
    console.log(acc);
    if (i === arr.length - 1) return acc;
    acc.push( [arr.slice(0, i + 1).join(' '), arr.slice(i + 1).join(' ')] );
    return acc;
  }, []);
}

/* Iterative */

function partlistIter(arr) {
  let result = [];
  for (var i = 0; i < arr.length - 1; i++) {
    result.push([arr.slice(0, i + 1).join(' '), arr.slice(i + 1).join(' ')]);
  }
  return result;
}

