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
  let counts = 0

  // Tracks unique permutations to avoid duplication
  const memo = {}

  // Tracks the next largest number (compared to input) found, for curtailing searches on unnecessary paths
  let nextLargest = null

  // Bail early for edge case where number is all the same number
  if (letters.split('').sort().join('') === letters.split('').sort((a, b) => a < b).join('')) return []

  const recurse = (rest, acc) => {
    if (!rest.length) {
      memo[acc] = true
      const accNumber = parseInt(acc)

      // Update the next largest number when larger than input and less than current next largest number
      if (accNumber > parseInt(letters) && (nextLargest === null || acc < nextLargest))
        nextLargest = accNumber
    }

    // curtail search when the substring is less than the number (no sense in walking that path)
    if (parseInt(acc) < parseInt(letters.slice(0, acc.length))) {
      return
    }

    // curtail search when substring is larger than the currently accumulated next largest number
    if (nextLargest !== null && (parseInt(acc) > parseInt(nextLargest.toString().slice(0, acc.length)))) {
      return
    }

    rest.forEach((letter, i) => {
      recurse(rest.slice(0, i).concat(rest.slice(i + 1)), acc + letter)
    })
  }

  recurse(letters.split(''), '')
  return Object.keys(memo)
}
