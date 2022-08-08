const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(1234)).toStrictEqual([ 4, 3, 2, 1 ]);
    expect(numberToReversedDigits(2468)).toStrictEqual([ 8, 6, 4, 2 ]);
    expect(numberToReversedDigits(112358)).toStrictEqual([ 8, 5, 3, 2, 1, 1]);
  });
});
