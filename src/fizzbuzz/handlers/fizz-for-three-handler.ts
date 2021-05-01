import {
  NumberReplacementHandler,
  NumberReplacementHandlerResult,
  INumberReplacementHandlerResult,
} from "../../common";

export class FizzForThreeHandler implements NumberReplacementHandler {
  handle(input: number): INumberReplacementHandlerResult {
    var result = new NumberReplacementHandlerResult();

    if (input % 3 == 0) {
      result.handled = true;
      result.value = "Fizz";
    }

    return result;
  }
}