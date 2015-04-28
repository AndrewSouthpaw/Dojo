/*
Using the JavaScript language, have the function SimpleMode(arr) take the array
 of numbers stored in arr and return the number that appears most frequently 
 (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should 
 be 4. If there is more than one mode return the one that appeared in the array
  first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). 
  If there is no mode return -1. The array will not be empty. 
 */

function simpleMode(arr) {
  var frequency = {};
  arr.forEach(function(num) {
    frequency[num] = frequency[num] + 1 || 1;
  });

  // collect max
  var max = 1;
  var maxNums = [];
  for (var num in frequency) {
    // reset max and numbers of that frequency if new max found
    if (frequency[num] > max) {
      maxNums.length = 0;
      max = frequency[num];
      maxNums.push(parseInt(num));
    // otherwise add to list of nums of that frequency if same as max
    } else if (frequency[num] === max) {
      maxNums.push(parseInt(num));
    } 
  }

  // return -1 if no mode found
  if (!maxNums.length) return -1;

  // otherwise get first mode that appears in array
  for (var i = 0; i < arr.length; i++) {
    if (maxNums.indexOf(arr[i]) !== -1) return arr[i];
  }
}


