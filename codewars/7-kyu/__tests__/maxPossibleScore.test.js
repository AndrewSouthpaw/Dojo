import { maxPossibleScore } from '../maxPossibleScore'

describe('#maxPossibleScore', () => {
  it('should work', () => {
    expect(maxPossibleScore({'a': 1, 'b': 2, 'c': 3}, ['a', 'c'])).toEqual(10)
    expect(maxPossibleScore({'a': 1, 'b': 2, 'c': 3}, [])).toEqual(6)
  })

  it('should handle "new questions" that do not have scores', () => {
    expect(maxPossibleScore({'a': 1}, ['b'])).toEqual(1)
  })
})
