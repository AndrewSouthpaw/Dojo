/*
https://www.codewars.com/kata/are-we-alternate

Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.

 */

export const isAlt = (str) => {
  /**
   * Regexp breakdown:
   * 1. Ensure we capture the entire word, bookend with ^ and *
   *     --> ^...$
   * 2. We can repeat vowel-consonant or consonant-vowel as many times as we want
   *     --> ([aeiou][^aeiou])*
   * 3. We can optionally have the beginning letter type at the end without an alternate
   *     --> [aeiou]?
   */
  const match = str.match(/^([aeiou][^aeiou])*[aeiou]?$/) || str.match(/^([^aeiou][aeiou])*[^aeiou]?$/)
  return !!match && match[0].length === str.length
}

/**
 * Retro
 *
 * I found another solution that was particularly elegant:
 *
 * return !/[aeiou]{2}|[^aeiou]{2}/.test(word)
 *
 * It simply checks if there are any places where two vowels or consonants are next to each other.
 * Simple and works! I like this solution more.
 */
