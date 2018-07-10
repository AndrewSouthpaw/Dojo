describe('#permutations', () => {
  it('should work', () => {
    expect(permutations('a')).toEqual(['a'])
    expect(permutations('ab')).toEqual(['ab', 'ba'])
  })

  it('should remove duplicates', () => {
    expect(permutations('aabb')).to.have.members(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])
  })
})
