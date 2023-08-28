it('should return number length of number', () => {
  expect(numberLength(10)).toBe(2);
  expect(numberLength(12334)).toBe(5);
})

function numberLength(num: number) {
  return num.toString().length;
}

