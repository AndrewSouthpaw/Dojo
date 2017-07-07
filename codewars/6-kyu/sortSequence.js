/*
https://www.codewars.com/kata/sort-the-number-sequence

Description:

Give you a number sequence(an array) that contains some positive integer and zero.

 [3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]
It can be split to some zero-terminated sub sequence, such as [3,2,1,0],[5,6,4,0]...

Your task is: First, sort each sub sequence according to the ascending order(don't sort the zero, it always at the end);
 Second, sort all sub sequence according to their sum value(ascending order too).

Arguments:

sequence: The number sequence.
Results & Note:

The result is the sorted number sequence.
If some sub sequences have the same sum value, sort them according to their original order.
 */

function splitSequences(arr) {
  const result = []
  let acc = []
  arr.forEach((n) => {
    if (n === 0) {
      result.push(acc.concat(0))
      acc = []
      return
    }

    acc.push(n)
  })
  return result
}

function sum(arr) {
  return arr.reduce((acc, n) => acc + n)
}

function sortSequence(arr) {
  return splitSequences(arr)
    .map(a => a.slice(0, a.length - 1).sort((a, b) => a - b).concat(0))
    .sort((a, b) => sum(a) - sum(b))
    .reduce((acc, seq) => acc.concat(seq))
}
