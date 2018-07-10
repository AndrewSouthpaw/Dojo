import { sortSequence, splitSequences } from '../sortSequence'

describe('#splitSequences', () => {
  it('should work', () => {
    expect(splitSequences([1, 2, 3, 0, 1, 0])).toEqual([[1, 2, 3, 0], [1, 0]])
    expect(splitSequences([1, 2, 3, 0, 1, 0, 1, 2, 0, 0])).toEqual([[1, 2, 3, 0], [1, 0], [1, 2, 0], [0]])
    expect(splitSequences([12, 23, 0, 441, 423, 0])).toEqual([[12, 23, 0], [441, 423, 0]])
  })
})

describe('#sortSequence', () => {
  it('should work', () => {
    expect(sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0])).toEqual([1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0])
    expect(sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0])).toEqual([1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0])
  });
})
