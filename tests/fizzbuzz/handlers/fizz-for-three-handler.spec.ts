import { describe } from "mocha";
import { expect } from "chai";
import { FizzForThreeHandler } from "../../../src/fizzbuzz";

describe("FizzForThreeHandler", () => {
  describe("handle()", () => {
    it("should return unhandled result", () => {
      // Given
      const expected = { handled: false };
      const handler = new FizzForThreeHandler();

      // When
      var result = handler.handle(1);

      // Then
      expect(result.handled).to.equal(expected.handled);
      expect(result.value).is.null;
    });

    it("should return handled result", () => {
      // Given
      const expected = { handled: true, value: "Fizz" };
      const handler = new FizzForThreeHandler();

      // When
      var result = handler.handle(3);

      // Then
      expect(result.handled).to.equal(expected.handled);
      expect(result.value).to.equal(expected.value);
    });
  });
});
