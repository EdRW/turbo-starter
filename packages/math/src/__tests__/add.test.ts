import { add } from '../add';

test('add function should return the sum of two numbers', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-5, 10)).toBe(5);
  expect(add(0, 0)).toBe(0);
});
