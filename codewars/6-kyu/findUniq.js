/**
 There is an array with some numbers. All numbers are equal except for one. Try to find it!

 findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 It’s guaranteed that array contains more than 3 numbers.
 */

export const findUniq = (arr) => {
  const frequency = arr.reduce((acc, n) => {
    acc[n] = acc[n] + 1 || 1
    return acc
  }, {})
  return parseFloat(Object.keys(frequency).filter(key => frequency[key] === 1)[0])
}

/**
 * Simpler version, which I quite liked and saw in the solutions. They didn't do it
 * immutably though, so I added that.
 */
export const findUniqWithSorting = (arr) => {
  const sorted = arr.slice().sort()
  return sorted[0] === sorted[1] ? sorted.pop() : sorted[0]
}
