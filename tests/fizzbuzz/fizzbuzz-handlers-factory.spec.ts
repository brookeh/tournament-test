import { describe } from "mocha";
import { expect } from "chai";
import { BuzzForFiveHandler, FizzBuzzForThreeFiveHandler, FizzForThreeHandler, FizzBuzzHandlersFactory } from "../../src/fizzbuzz";
import { NumberByDefaultHandler } from "../../src/common";

describe("FizzBuzzHandlersFactory", () => {
  describe("create()", () => {
    it("should create number replacement handlers", () => {
      // Given
      const expected = [
        new FizzBuzzForThreeFiveHandler(),
        new FizzForThreeHandler(),
        new BuzzForFiveHandler(),
        new NumberByDefaultHandler(),
      ];

      const factory = new FizzBuzzHandlersFactory();

      // When
      var result = factory.create();

      // Then
      expect(result).to.have.lengthOf(expected.length);
      expect(result[0]).to.be.instanceOf(FizzBuzzForThreeFiveHandler);
      expect(result[1]).to.be.instanceOf(FizzForThreeHandler);
      expect(result[2]).to.be.instanceOf(BuzzForFiveHandler);
      expect(result[3]).to.be.instanceOf(NumberByDefaultHandler);
    });
  });
});
