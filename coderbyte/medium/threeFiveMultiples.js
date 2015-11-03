/**
 * Have the function ThreeFiveMultiples(num) return the sum of all the 
 * multiples of 3 and 5 that are below num. For example: if num is 10, the 
 * multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them 
 * up you get 23, so your program should return 23. The integer being passed 
 * will be between 1 and 100. 
 */

function threeFiveMultiples(num) {
  var multiples3 = 1;
  var multiples5 = 0;
  var nextLargest = 3;
  var numsSoFar = [];
  
  // run until the next multiple exceeds input
  while (nextLargest < num) {
    numsSoFar.push(nextLargest);
    // find the next smallest multiple
    if ((multiples3 + 1) * 3 <= (multiples5 + 1) * 5) {
      nextLargest = ++multiples3 * 3;
      // skip over next multiple of 5 if it's the same
      if ((multiples5 + 1) * 5 === nextLargest) multiples5++;
    } else {
      nextLargest = ++multiples5 * 5;
    }
    
  }
  
  // sum the multiples
  return numsSoFar.reduce(function(acc, num) { return acc + num; }, 0);
}
