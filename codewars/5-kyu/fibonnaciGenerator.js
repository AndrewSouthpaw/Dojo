/*
https://www.codewars.com/kata/fibonacci-generator

Create a function generator genfib() that returns a function fib() which always returns the next fibonacci number
on each invocation (and returns 0 when being called the first time).

Example:

var fib = genfib();
fib(); // -> returns 0
fib(); // -> returns 1
fib(); // -> returns 1
fib(); // -> returns 2

 */

export const genfib = () => {
  let x = 1
  let y = 0
  return () => {
    const combo = x + y
    x = y
    y = combo
    return x
  }
}
