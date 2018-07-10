import { findUniq } from '../findUniq'

describe('#findUniq', () => {
  it('should work', () => {
    expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).toEqual(2)
    expect(findUniq([ 0, 0, 0.55, 0, 0 ])).toEqual(0.55)
  })
})
