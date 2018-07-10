import { permutations } from '../permutations'

describe('#permutations', () => {
  it('should work', () => {
    expect(permutations('a')).toEqual(['a'])
    expect(permutations('ab')).toEqual(['ab', 'ba'])
  })

  it('should remove duplicates', () => {
    expect(permutations('aabb')).toEqual(expect.arrayContaining(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']))
  })
})
