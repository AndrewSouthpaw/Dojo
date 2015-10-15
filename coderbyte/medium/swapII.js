/**
 * Have the function SwapII(str) take the str parameter and swap the case of 
 * each character. Then, if a letter is between two numbers (without 
 * separation), switch the places of the two numbers. For example: if str 
 * is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3. 
 */

/**
 * Post analysis: I found an excellent regex to replace `reverseNumbersInWord`
 * with a single line. Beautiful!
 *
 *   str.replace(/(\d)([a-zA-Z]+)(\d)/, '$3$2$1');
 */

function swapII(str) {
  // reveal hoisted functions for clarity
  var swapCase = swapCase;
  var reverseNumbersInWord = reverseNumbersInWord;

  return swapCase(str)
    .split(' ')
    .map(function(word) { return reverseNumbersInWord(word); })
    .join(' ');  
  
  function swapCase(str) {
    return str
      .split('')
      .map(function(letter) {
        if (letter.match(/[A-Z]/)) return letter.toLowerCase();
        if (letter.match(/[a-z]/)) return letter.toUpperCase();
        return letter;
      })
      .join('');
  }

  function reverseNumbersInWord(str) {
    str = str.split('');
    var front = 0;
    var back = str.length - 1;
    var temp;
    while (true) {
      // move front to a number
      while (front < back && !str[front].match(/\d/)) front++;
      // if front has moved past back, exit
      if (front >= back) break;
      // move back to a number
      while (!str[back].match(/\d/)) back--;
      // swap the two numbers
      temp = str[front];
      str[front] = str[back];
      str[back] = temp;
      // move the counters
      front++;
      back--;
    }
    return str.join('');
  }
}