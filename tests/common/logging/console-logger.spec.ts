import { describe } from "mocha";
import { expect } from "chai";
import { ConsoleLogger } from "../../../src/common";
import { spy, capture } from "ts-mockito";

describe("ConsoleLogger", () => {
  describe("log()", () => {
    it("should log value to console", () => {
      // Given
      const input = "    Testing";

      var spiedConsole = spy(console);
      var logger = new ConsoleLogger();
      
      // When
      logger.log(input);

      // Then
      expect(capture(spiedConsole.log).first()[0]).to.equal(input);
    });
  });
});