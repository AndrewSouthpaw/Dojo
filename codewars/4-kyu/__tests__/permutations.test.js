describe('#permutations', () => {
  it('should work', () => {
    expect(permutations('a')).to.eql(['a'])
    expect(permutations('ab')).to.eql(['ab', 'ba'])
  })

  it('should remove duplicates', () => {
    expect(permutations('aabb')).to.have.members(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])
  })
})
