import { describe } from "mocha";
import { expect } from "chai";
import { BuzzForFiveHandler } from "../../../src/fizzbuzz";

describe("BuzzForFiveHandler", () => {
  describe("handle()", () => {
    it("should return unhandled result", () => {
      // Given
      const expected = { handled: false };
      const handler = new BuzzForFiveHandler();

      // When
      var result = handler.handle(1);

      // Then
      expect(result.handled).to.equal(expected.handled);
      expect(result.value).is.null;
    });

    it("should return handled result", () => {
      // Given
      const expected = { handled: true, value: "Buzz" };
      const handler = new BuzzForFiveHandler();

      // When
      var result = handler.handle(5);

      // Then
      expect(result.handled).to.equal(expected.handled);
      expect(result.value).to.equal(expected.value);
    });
  });
});
