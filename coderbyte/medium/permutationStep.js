/**
 * Using the JavaScript language, have the function PermutationStep(num) take 
 * the num parameter being passed and return the next number greater than num 
 * using the same digits. For example: if num is 123 return 132, if it's 12453 
 * return 12534. If a number has no greater permutations, return -1 (ie. 999). 
 */

function permutationStep(num) {
  var permutations = {};
  function permute(acc, remainder) {
    if (!remainder.length) permutations[parseInt(acc)] = true;
    for (var i = 0; i < remainder.length; i++) {
      permute(acc + remainder[i], remainder.substring(0, i) + remainder.slice(i + 1));
    }
  }
  permute('', num.toString());

  var orderedPermutations = [];
  for (var permutation in permutations) {
    orderedPermutations.push(parseInt(permutation, 10));
  }
  orderedPermutations.sort();

  var index = orderedPermutations.indexOf(num);
  return index === orderedPermutations.length - 1 ? -1 : orderedPermutations[index + 1];
}
