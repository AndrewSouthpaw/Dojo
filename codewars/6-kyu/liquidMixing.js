/**
https://www.codewars.com/kata/simple-fun-number-227-liquid-mixing

You are mixing different liquids of equal volume in a barrel. All the liquids have different density, and after some
time they rearrange themselves in such a way that denser liquids are located lower in the barrel than those with
lower density.

You add liquids one by one, and wait a bit after each addition until all the liquids in the barrel rearrange correctly.

After each addition, you are interested in the density of the liquid that is floating right in the middle. If there
are two middle liquids (i.e. the number of liquids is even), then you want to know their mean density. Let's call the
value you are interested in the median density. Return an array of median densities after each addition.

Input/Output

[input] integer array densities

An array of positive integers - the densities (in some measure units) of the liquids in the order of their mixing.

1 ≤ densities.length ≤ 100

1 ≤ densities[i] ≤ 100

[output] a float array

Example

For densities = [10, 20, 8, 12, 6],

the output should be [10, 15, 10, 11, 10].

A table that shows how the liquids are added is given below:

+--------------+----------------+----------------+
| added liquid |  barrel state  | median density |
+--------------+----------------+----------------+
|     10       | 10             |       10       |
+--------------+----------------+----------------+
|     20       | 10 20          |       15       |
+--------------+----------------+----------------+
|     8        | 8  10 20       |       10       |
+--------------+----------------+----------------+
|     12       | 8  10 12 20    |       11       |
+--------------+----------------+----------------+
|     6        | 6  8  10 12 20 |       10       |
+--------------+----------------+----------------+
 */

export const liquidMixing = (densities) => {
  const result = []
  const barrel = []
  densities.forEach((density) => {
    barrel.push(density)
    barrel.sort((a, b) => a - b)
    result.push(arrayMedian(barrel))
  })
  return result
}

export const arrayMedian = (arr) => {
  const isEven = arr.length % 2 === 0
  const midpoint = Math.floor(arr.length / 2)
  return isEven ? (arr[midpoint - 1] + arr[midpoint]) / 2 : arr[midpoint]
}
