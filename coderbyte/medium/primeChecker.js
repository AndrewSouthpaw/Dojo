/**
 *  Have the function PrimeChecker(num) take num and return 1 if any 
 *  arrangement of num comes out to be a prime number, otherwise return 0. For 
 *  example: if num is 910, the output should be 1 because 910 can be arranged 
 *  into 109 or 019, both of which are primes. 
 */

function primeChecker(num) {
  
  // Checks if number is prime
  function isPrime(num) {
    if (i <= 2) return true;
    var max = Math.ceil(Math.sqrt(num));
    for (var i = 2; i <= max; i++) {
      if (num % i === 0) return false;  
    }
    return true;
  }

  // Generates permutations of a number string
  function permutations(numStr) {
    var permutations = {};
    function recur(acc, remainder) {
      if (!remainder.length) {
        permutations[acc] = true; 
      }
      for (var i = 0; i < remainder.length; i++) {
        recur(acc + remainder.slice(i, i + 1), remainder.substring(0, i) + remainder.substring(i + 1));
      }
    }
    recur('', numStr);
    var result = [];
    for (var permutationStr in permutations) {
      result.push(parseInt(permutationStr, 10));
    }
    return result;
  }
  
  // get permutations
  var permutations = permutations(num.toString());
  // check if each permutation is prime
  var result = false;
  permutations.forEach(function(permutation) {
    if (isPrime(permutation)) result = true;
  });
  
  return result ? 1 : 0;
}
