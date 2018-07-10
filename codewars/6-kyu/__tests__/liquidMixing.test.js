describe('#liquidMixing', () => {
  it('should get middle density for odd number in barrel', () => {
    expect(liquidMixing([10, 20, 8, 12, 6])).toEqual([10, 15, 10, 11, 10])
  })

  it.only('should handle random tests', () => {
    expect(liquidMixing([91,91,6,55,91,39,22,22,5,20,10,21,18,88,4,73,8,86,6,37,89,89,38,98,48,78,13,22,100,14,40,8,96,22,20,55,74,10,3,41,57,74,6,68,27,58,48,94,42,13,14,57,94,30,39,87,72])).toEqual([91, 91, 91, 73, 91, 73, 55, 47, 39, 30.5, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 29.5, 37, 37.5, 38, 38.5, 38, 37.5, 38, 37.5, 38, 37.5, 38, 37.5, 37, 37.5, 38, 37.5, 37, 37.5, 38, 38.5, 38, 38.5, 38, 38.5, 39, 39.5, 40, 39.5, 39, 39.5, 40, 39.5, 39, 39.5, 40])
  });
})

describe('#arrayMedian', () => {
  it('should return median for odd-numbered array', () => {
    expect(arrayMedian([1, 2, 3])).toEqual(2)
  })

  it('should return average of middle values for even-numbered array', () => {
    expect(arrayMedian([2, 4])).toEqual(3)
    expect(arrayMedian([2, 4, 6, 8])).toEqual(5)
  })
})
