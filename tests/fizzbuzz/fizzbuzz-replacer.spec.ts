import { describe } from "mocha";
import { instance, mock, verify, when } from "ts-mockito";
import { NumberByDefaultHandler } from "../../src/common";
import { BuzzForFiveHandler, FizzBuzzForThreeFiveHandler, FizzBuzzHandlersFactory, FizzBuzzReplacer, FizzForThreeHandler } from "../../src/fizzbuzz";
import { expect } from "chai";

describe("FizzBuzzReplacer", () => {
  describe("replace()", () => {
    it("should not replace number", () => {
      // Given
      const input = 1;
      const expected = String(input);

      const fizzBuzzForThreeFiveHandlerResult = { handled: false, value: null };
      const mockedFizzBuzzForThreeFiveHandler = mock(FizzBuzzForThreeFiveHandler);
      when(mockedFizzBuzzForThreeFiveHandler.handle(input)).thenReturn(fizzBuzzForThreeFiveHandlerResult);
      const fizzBuzzForThreeFiveHandler = instance(mockedFizzBuzzForThreeFiveHandler);

      const fizzForThreeHandlerResult = { handled: false, value: null };
      const mockedFizzForThreeHandler = mock(FizzForThreeHandler);
      when(mockedFizzForThreeHandler.handle(input)).thenReturn(fizzForThreeHandlerResult);
      const fizzForThreeHandler = instance(mockedFizzForThreeHandler);

      const buzzForFiveHandlerResult = { handled: false, value: null };
      const mockedBuzzForFiveHandler = mock(BuzzForFiveHandler);
      when(mockedBuzzForFiveHandler.handle(input)).thenReturn(buzzForFiveHandlerResult);
      const buzzForFiveHandler = instance(mockedBuzzForFiveHandler);

      const numberByDefaultHandlerResult = { handled: true, value: String(input) };
      const mockedNumberByDefaultHandler = mock(NumberByDefaultHandler);
      when(mockedNumberByDefaultHandler.handle(input)).thenReturn(numberByDefaultHandlerResult);
      const numberByDefaultHandler = instance(mockedNumberByDefaultHandler);

      const mockedFactory = mock(FizzBuzzHandlersFactory);
      when(mockedFactory.create()).thenReturn([
        fizzBuzzForThreeFiveHandler, 
        fizzForThreeHandler,
        buzzForFiveHandler,
        numberByDefaultHandler
      ]);

      const factory = instance(mockedFactory);
      const replacer = new FizzBuzzReplacer(factory);

      // When
      var result = replacer.replace(input);

      // Then
      verify(mockedFizzBuzzForThreeFiveHandler.handle(input)).once();
      verify(mockedFizzForThreeHandler.handle(input)).once();
      verify(mockedBuzzForFiveHandler.handle(input)).once();
      verify(mockedNumberByDefaultHandler.handle(input)).once();
      verify(mockedFactory.create()).once();
      expect(result).to.be.equal(expected);
    });

    it("should replace number with 'Fizz'", () => {
      // Given
      const input = 3;
      const expected = "Fizz";

      const handlerResult = { handled: true, value: "Fizz" };
      const mockedHandler = mock(FizzForThreeHandler);
      when(mockedHandler.handle(input)).thenReturn(handlerResult);
      const handler = instance(mockedHandler);

      const mockedFactory = mock(FizzBuzzHandlersFactory);
      when(mockedFactory.create()).thenReturn([handler]);

      const factory = instance(mockedFactory);
      const replacer = new FizzBuzzReplacer(factory);

      // When
      var result = replacer.replace(input);

      // Then
      verify(mockedHandler.handle(input)).once();
      verify(mockedFactory.create()).once();
      expect(result).to.be.equal(expected);
    });

    it("should replace number with 'Buzz'", () => {
      // Given
      const input = 5;
      const expected = "Buzz";

      const handlerResult = { handled: true, value: "Buzz" };
      const mockedHandler = mock(BuzzForFiveHandler);
      when(mockedHandler.handle(input)).thenReturn(handlerResult);
      const handler = instance(mockedHandler);

      const mockedFactory = mock(FizzBuzzHandlersFactory);
      when(mockedFactory.create()).thenReturn([handler]);

      const factory = instance(mockedFactory);
      const replacer = new FizzBuzzReplacer(factory);

      // When
      var result = replacer.replace(input);

      // Then
      verify(mockedHandler.handle(input)).once();
      verify(mockedFactory.create()).once();
      expect(result).to.be.equal(expected);
    });

    it("should replace number with 'FizzBuzz'", () => {
      // Given
      const input = 15;
      const expected = "FizzBuzz";

      const handlerResult = { handled: true, value: "FizzBuzz" };
      const mockedHandler = mock(FizzBuzzForThreeFiveHandler);
      when(mockedHandler.handle(input)).thenReturn(handlerResult);
      const handler = instance(mockedHandler);

      const mockedFactory = mock(FizzBuzzHandlersFactory);
      when(mockedFactory.create()).thenReturn([handler]);

      const factory = instance(mockedFactory);
      const replacer = new FizzBuzzReplacer(factory);

      // When
      var result = replacer.replace(input);

      // Then
      verify(mockedHandler.handle(input)).once();
      verify(mockedFactory.create()).once();
      expect(result).to.be.equal(expected);
    });
  });
});
