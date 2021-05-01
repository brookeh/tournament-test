import {
  NumberReplacementHandler,
  NumberReplacementHandlerResult,
  INumberReplacementHandlerResult,
} from "../../common";

export class FizzBuzzForThreeFiveHandler implements NumberReplacementHandler {
  handle(input: number): INumberReplacementHandlerResult {
    var result = new NumberReplacementHandlerResult();

    if (input % 3 == 0 && input % 5 == 0) {
      result.handled = true;
      result.value = "FizzBuzz";
    }

    return result;
  }
}