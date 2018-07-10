describe('#uniqueInOrder', function() {
  it('should handle numbers', () => {
    expect(uniqueInOrder([1, 2, 2, 3, 5, 7])).toEqual([1, 2, 3, 5, 7])
    expect(uniqueInOrder([1, 2, 3, 1])).toEqual([1, 2, 3, 1])
  })

  it('should handle letters', () => {
    expect(uniqueInOrder('AABbbCDA')).toEqual(['A', 'B', 'b', 'C', 'D', 'A'])
  })
});
