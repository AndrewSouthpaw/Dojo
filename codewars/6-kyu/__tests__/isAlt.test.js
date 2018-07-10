import { isAlt } from '../isAlt'

describe('#isAlt', () => {
  it('should work', () => {
    expect(isAlt('amazona')).toEqual(true)
    expect(isAlt('banana')).toEqual(true)
    expect(isAlt('bananap')).toEqual(true)
    expect(isAlt('a')).toEqual(true)
    expect(isAlt('b')).toEqual(true)
    expect(isAlt('apple')).toEqual(false)
    expect(isAlt('dicia')).toEqual(false)
    expect(isAlt('bfbia')).toEqual(false)
    expect(isAlt('bjcab')).toEqual(false)
  })
})
