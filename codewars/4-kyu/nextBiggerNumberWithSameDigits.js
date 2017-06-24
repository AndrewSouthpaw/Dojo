/**
  http://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

  You have to create a function that takes a positive integer number and returns the next bigger number formed by the
  same digits:

  nextBigger(12)==21
  nextBigger(513)==531
  nextBigger(2017)==2071
  If no bigger number can be composed using those digits, return -1:

  nextBigger(9)==-1
  nextBigger(111)==-1
  nextBigger(531)==-1

 */

function nextBigger(number) {
  const orderedPermutations = permutations(number.toString()).map(x => parseInt(x)).sort()
  const nextLargest = orderedPermutations.filter(x => x >= number)[1]
  return nextLargest === undefined ? -1 : nextLargest
}

function permutations(letters) {
  const recurse = (rest, acc, memo) => {
    if (!rest.length) {
      memo[acc] = true
      return memo
    }
    rest.reduce((combos, letter, i) => {
      return combos.concat(recurse(rest.slice(0, i).concat(rest.slice(i + 1)), acc + letter, memo))
    }, [])
    return memo
  }
  return Object.keys(recurse(letters.split(''), '', {}))
}
