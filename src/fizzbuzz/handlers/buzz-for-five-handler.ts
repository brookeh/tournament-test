import {
  NumberReplacementHandler,
  NumberReplacementHandlerResult,
  INumberReplacementHandlerResult,
} from "../../common";

export class BuzzForFiveHandler implements NumberReplacementHandler {
  handle(input: number): INumberReplacementHandlerResult {
    var result = new NumberReplacementHandlerResult();

    if (input % 5 == 0) {
      result.handled = true;
      result.value = "Buzz";
    }

    return result;
  }
}