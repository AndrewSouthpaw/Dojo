/**
 * Have the function TripleDouble(num1,num2) take both parameters being passed, 
 * and return 1 if there is a straight triple of a number at any place in 
 * num1 and also a straight double of the same number in num2. For example: 
 * if num1 equals 451999277 and num2 equals 41177722899, then return 1 because 
 * in the first parameter you have the straight triple 999 and you have a 
 * straight double, 99, of the same number in the second parameter. If this 
 * isn't the case, return 0. 
 */

function tripleDouble(num1, num2) {
  if (!num1.match(/(\d)\1+/g) || !num2.match(/(\d)\1+/g)) return 0;
  var triples1 = num1
    .match(/(\d)\1+/g)
    .reduce(function(acc, run) {
      if (run.length >= 3) acc[run.charAt(0)] = true;
      return acc;
    }, {});
  
  return num2
    .match(/(\d)\1+/g)
    .reduce(function(acc, run) {
      return (run.length >= 2 && triples1[run.charAt(0)]) ? 1 : acc;
    }, 0);
}