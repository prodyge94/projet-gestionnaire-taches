// tests/unit.test.js

function addition(a, b) {
  return a + b;
}

test("additionne 2 et 3 pour obtenir 5", () => {
  expect(addition(2, 3)).toBe(5);
});
