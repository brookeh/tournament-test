import { describe } from "mocha";
import { instance, mock, verify, when } from "ts-mockito";
import { ConsoleLogger } from "../../src/common";
import { FizzBuzzPrinter, FizzBuzzReplacer } from "../../src/fizzbuzz";

describe("FizzBuzzPrinter", () => {
  describe("print()", () => {

    it("should print number", () => {
      // Given
      const input = 2;

      const mockedLogger = mock(ConsoleLogger);
      const logger = instance(mockedLogger);

      const mockedReplacer = mock(FizzBuzzReplacer);
      const replacer = instance(mockedReplacer);
      when(mockedReplacer.replace(input)).thenReturn(String(input));

      const printer = new FizzBuzzPrinter(logger, replacer);

      // When
      printer.print(input);

      // Then
      verify(mockedReplacer.replace(input)).once();
      verify(mockedLogger.log(String(input))).once();
    });
  });
});
