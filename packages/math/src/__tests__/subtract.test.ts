import { subtract } from '../subtract';

test('subtract function should subtract two numbers correctly', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(10, 7)).toBe(3);
  expect(subtract(0, 0)).toBe(0);
});
