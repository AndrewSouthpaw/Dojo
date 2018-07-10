it('should do something', function() {
  expect(nextBigger(12)).toEqual(21)
  expect(nextBigger(513)).toEqual(531)
  expect(nextBigger(2017)).toEqual(2071)
  expect(nextBigger(123456789)).toEqual(123456798)
});

it('should handle larger numbers', function() {
  expect(nextBigger(99999999999999)).toEqual(-1)
  expect(nextBigger(1234567811112)).toEqual(1234567811121)
  expect(nextBigger(59884848459853)).toEqual(59884848483559)
});

it('should return -1 otherwise', function() {
  expect(nextBigger(9)).toEqual(-1)
  expect(nextBigger(111)).toEqual(-1)
  expect(nextBigger(531)).toEqual(-1)
});
