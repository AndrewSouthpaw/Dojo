/**
 * Have the function DashInsertII(str) insert dashes ('-') between each two 
 * odd numbers and insert asterisks ('*') between each two even numbers in 
 * str. For example: if str is 4546793 the output should be 454*67-9-3. 
 * Don't count zero as an odd or even number.
 */

function dashInsertII(num) {
  if (typeof num === 'undefined') return '';
  var numStr = num.toString();
  var result = '';
  for (var i = 0; i < numStr.length; i++) {
    if (numStr[i - 1] !== '0' && numStr[i] !== '0') {
      if (numStr[i - 1] % 2 === 0 && numStr[i] % 2 === 0) {
        result += '*';
      } else if (numStr[i - 1] % 2 === 1 && numStr[i] % 2 === 1) {
        result += '-';
      }
    }

    result += numStr[i];
  }
  return result;
}