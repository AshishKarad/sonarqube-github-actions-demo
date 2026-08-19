const { divide, calculateDiscount } = require("../src/calculator");

test("divide 10 by 2", () => {
  expect(divide(10, 2)).toBe(5);
});

test("10 percent discount", () => {
  expect(calculateDiscount(100, 10)).toBe(90);
});
