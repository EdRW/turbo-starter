import { funcA, funcB } from '../index';

describe('funcA and funcB', () => {
  it('should return 5', () => {
    expect(funcA()).toBe(5);
    expect(funcB()).toBe(5);
  });
});
