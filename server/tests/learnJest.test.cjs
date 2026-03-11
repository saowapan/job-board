const LearnJest = require('../learnJest.cjs');

describe('learnJest', () => {
  let learnJest;

  beforeEach(() => {
    learnJest = new LearnJest();
  });

  test('Should add two positive number correctly', () => {
    // Arrange
    const a = 5;
    const b = 3;
    const expected = 8;

    // Act
    const result = learnJest.add(a, b);

    // Assert
    expect(result).toBe(expected);
  });

  test('arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(arr1).toEqual(arr2);
  });

  test('objects', () => {
    const obj1 = { name: 'May', age: 18 };
    const obj2 = { name: 'May', age: 18 };
    expect(obj1).toEqual(obj2);
  })
});