import { removeDuplicateWords } from '../removeDuplicateWords'

describe('#removeDuplicateWords', () => {
  it('should work', () => {
    expect(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
      .toEqual('alpha beta gamma delta')
  })
})
