import { describe } from "mocha";
import { expect } from "chai";
import { FizzBuzzForThreeFiveHandler } from "../../../src/fizzbuzz";

describe("FizzBuzzForThreeFiveHandler", () => {
  describe("handle()", () => {
    it("should return unhandled result", () => {
      // Given
      const expected = { handled: false };
      const handler = new FizzBuzzForThreeFiveHandler();

      // When
      var result = handler.handle(1);

      // Then
      expect(result.handled).to.equal(expected.handled);
      expect(result.value).is.null;
    });

    it("should return handled result", () => {
      // Given
      const expected = { handled: true, value: "FizzBuzz" };
      const handler = new FizzBuzzForThreeFiveHandler();

      // When
      var result = handler.handle(15);

      // Then
      expect(result.handled).to.equal(expected.handled);
      expect(result.value).to.equal(expected.value);
    });
  });
});
