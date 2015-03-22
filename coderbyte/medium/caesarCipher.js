
/*
Ceasar Cipher
=============
Using the JavaScript language, have the function CaesarCipher(str,num) take
the str parameter and perform a Caesar Cipher shift on it using the num
parameter as the shifting number. A Caesar Cipher works by shifting each 
letter in the string N places down in the alphabet (in this case N will be
num). Punctuation, spaces, and capitalization should remain intact. For
example if the string is "Caesar Cipher" and num is 2 the output should
be "Ecguct Ekrjgt". 
 */

function caesarCipher(str, num) {
  var result = '';
  str.split('').forEach(function(letter) {
    // Skip non-letters
    if (!letter.match(/[A-Za-z]/)) return result += letter;

    var cipherChNum = letter.charCodeAt(0) + num;
    // shift char num if landing between Z and a, or greater than z
    if ((cipherChNum > 'Z'.charCodeAt(0) && cipherChNum < 'a'.charCodeAt(0)) ||
        (cipherChNum > 'z'.charCodeAt(0))) {
      cipherChNum -= 26;
    } 

    result += String.fromCharCode(cipherChNum);
  });
  return result;
}
