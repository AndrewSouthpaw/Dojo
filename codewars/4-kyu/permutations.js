/*
https://www.codewars.com/kata/permutations/javascript

In this kata you have to create all permutations of an input string and remove duplicates, if present. This means,
you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.

 */

function permutations(str) {
  const result = {}

  const recurse = (acc, rest) => {
    if (!rest.length) result[acc] = true
    rest.forEach((letter, i) => recurse(acc + letter, rest.slice(0, i).concat(rest.slice(i + 1))))
  }

  recurse('', str.split(''))

  return Object.keys(result)
}
