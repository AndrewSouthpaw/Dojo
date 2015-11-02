/**
 * Have the function BracketMatcher(str) take the str parameter being passed 
 * and return 1 if the brackets are correctly matched and each one is 
 * accounted for. Otherwise return 0. For example: if str is "(hello (world))", 
 * then the output should be 1, but if str is "((hello (world))" the the 
 * output should be 0 because the brackets do not correctly match up. Only "(" 
 * and ")" will be used as brackets. If str contains no brackets return 1. 
 */

function bracketMatcher(str) {
  var openParens = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(') openParens++;
    if (str[i] === ')' && openParens === 0) return 0;
    if (str[i] === ')' && openParens > 0) openParens--;
  }
  return openParens === 0 ? 1 : 0;
}