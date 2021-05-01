import { describe } from "mocha";
import { expect } from "chai";
import { NumberByDefaultHandler } from "../../../../src/common";

describe("NumberByDefaultHandler", () => {
  describe("handle()", () => {
    it("should return handled result", () => {
      // Given
      const expected = { handled: true, value: String(1) };
      const handler = new NumberByDefaultHandler();

      // When
      var result = handler.handle(1);

      // Then
      expect(result.handled).to.equal(expected.handled);
      expect(result.value).to.equal(expected.value);
    });
  });
});