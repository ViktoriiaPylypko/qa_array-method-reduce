'use strict';

const { reduce } = require('./reduce');

describe('reduce', () => {
  beforeAll(() => {
    Array.prototype.reduce2 = reduce; // eslint-disable-line
  });

  afterAll(() => {
    delete Array.prototype.reduce2;
  });

  it('should sum array values with initial value', () => {
    const arr = [1, 2, 3];
    const result = arr.reduce2((acc, val) => acc + val, 10);

    expect(result).toBe(16); // 10 + 1 + 2 + 3
  });

  it('should sum array values without initial value', () => {
    const arr = [1, 2, 3];
    const result = arr.reduce2((acc, val) => acc + val);

    expect(result).toBe(6); // 1 + 2 + 3
  });

  it('should multiply array values', () => {
    const arr = [2, 3, 4];
    const result = arr.reduce2((acc, val) => acc * val, 1);

    expect(result).toBe(24); // 1 * 2 * 3 * 4
  });

  it('should concatenate strings', () => {
    const arr = ['a', 'b', 'c'];
    const result = arr.reduce2((acc, val) => acc + val, '');

    expect(result).toBe('abc');
  });

  it('should handle single-element array with no initial value', () => {
    const arr = [5];
    const result = arr.reduce2((acc, val) => acc + val);

    expect(result).toBe(5); // returns the only element
  });

  it('should handle empty array with initial value', () => {
    const arr = [];
    const result = arr.reduce2((acc, val) => acc + val, 100);

    expect(result).toBe(100);
  });

  // Add tests here
});
