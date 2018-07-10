import { genfib } from '../fibonnaciGenerator'

describe('genfib', () => {
  it('should work', () => {
    const fib = genfib()
    expect(fib()).toEqual(0)
    expect(fib()).toEqual(1)
    expect(fib()).toEqual(1)
    expect(fib()).toEqual(2)
    expect(fib()).toEqual(3)
    expect(fib()).toEqual(5)
    expect(fib()).toEqual(8)
    expect(fib()).toEqual(13)
  })
});
