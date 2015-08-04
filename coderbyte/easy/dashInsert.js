/*
Have the function DashInsert(str) insert dashes ('-') between each two odd 
numbers in str. For example: if str is 454793 the output should be 4547-9-3.
Don't count zero as an odd number. 
 */

function dashInsert(str) {
  str = str.split('');
  for(var i = 0; i < str.length - 1; i++) {
    if (parseInt(str[i]) % 2 === 1 && parseInt(str[i + 1]) % 2 === 1) {
      str.splice(i + 1, 0, '-');
      i++;
    }
  }
  return str.join('');
}