/*
Second GreatLow
===============

Using the JavaScript language, have the function SecondGreatLow(arr) take the 
array of numbers stored in arr and return the second lowest and second greatest 
numbers, respectively, separated by a space. For example: if arr contains 
[7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and
 will contain at least 2 numbers. It can get tricky if there's just two numbers! 
 */

function secondGreatLow(arr) {
  // get unique numbers
  var uniques = {};
  var result = [];
  arr.forEach(function(val) {
    uniques[val] = true;
  });
  for (var key in uniques) {
    result.push(parseInt(key, 10));
  }

  // sort them
  result.sort(function(a, b) { return a > b; });
  
  // return result
  return result[1] + ' ' + result[result.length - 2];
}
