const Calculator = require('./calculator.js')

describe.each([
    {a: 1, b: 1, expected: 2},
    {a: 1, b: 2, expected: 3},
    {a: 2, b: 1, expected: 3},
  ])
  ('.add($a, $b)', ({a, b, expected}) => {
    test(`returns ${expected}`, () => {
      expect(Calculator.add(a,b)).toBe(expected);
    });
});

describe.each([
    {a: 2, b: 1, expected: 1},
    {a: 10, b: 2, expected: 8},
    {a: 2, b: 2, expected: 0},
  ])
  ('.substract($a, $b)', ({a, b, expected}) => {
    test(`returns ${expected}`, () => {
      expect(Calculator.substract(a,b)).toBe(expected);
    });
});
  

describe.each([
    {a: 2, b: 1, expected: 2},
    {a: 10, b: 2, expected: 5},
    {a: 2, b: 2, expected: 1},
  ])
  ('.devide($a, $b)', ({a, b, expected}) => {
    test(`returns ${expected}`, () => {
      expect(Calculator.devide(a,b)).toBe(expected);
    });
});

describe.each([
    {a: 2, b: 1, expected: 2},
    {a: 10, b: 2, expected: 20},
    {a: 2, b: 2, expected: 4},
  ])
  ('.multiply($a, $b)', ({a, b, expected}) => {
    test(`returns ${expected}`, () => {
      expect(Calculator.multiply(a,b)).toBe(expected);
    });
});