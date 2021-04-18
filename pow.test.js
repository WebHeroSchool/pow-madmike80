const pow = require('./pow');

test('2**3', () => {
  expect(pow(2, 3)).toBe(8);
});

test('2**2', () => {
  expect(pow(2, 2)).toBe(4);
});

test('3**2', () => {
  expect(pow(3, 2)).toBe(9);
});

test('3**3', () => {
  expect(pow(3, 3)).toBe(27);
});

test('1**100', () => {
  expect(pow(1, 100)).toBe(1);
});
test('1**-5', () => {
  expect(pow(1, -5)).toBe(false);
});

